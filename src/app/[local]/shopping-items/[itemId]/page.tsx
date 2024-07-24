import { bodyPadding } from "@/assets/global";
import TabsContainer from "@/components/ItemDetailed/ItemTabs/TabsContainer";
import RecommendedContainer from "@/components/ItemDetailed/RecommendedItems/RecommendedContainer";
import RelatedArticalsContainer from "@/components/ItemDetailed/RelatedArticles/RelatedArticalsContainer";
import AddToWishList from "@/components/ShoppingItemsPage/AddToWishList";
import PriceProvider from "@/components/ShoppingItemsPage/PriceProvider";
import { postRequest } from "@/utils/db";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getLocale, getTranslations } from "next-intl/server";
import NextLink from "next/link";
import AddToCartWithQty from "./AddToCartWithQty";

const ItemDetailsPage = async ({ params }: { params: { itemId: string } }) => {
  const getProduct = await postRequest(
    `/api/products/getActiveProds?product_id=${params.itemId}`,
    {}
  );
  const product = getProduct[0];
  const allProds = await postRequest("/api/products/getActiveProds", {});
  // const product = products.find((prod) => prod.id === parseInt(params.itemId));
  const localeActive = await getLocale();
  const t = await getTranslations("itemDetailed");

  const stockAvail = () => {
    if (localeActive === "fr") {
      if (product?.inStore) return "En stock";
      else return "Épuisé";
    } else if (localeActive === "ar") {
      if (product?.inStore) return "متاح";
      else return "غير متوفر حالياً";
    }
  };

  return (
    <Box px={bodyPadding}>
      <Flex gap={6}>
        <Flex w={{ base: "100%", lg: "80%" }} py={7}>
          <HStack
            alignItems={"flex-start"}
            w={"100%"}
            wrap={"wrap"}
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            <Image
            alt=""
              src={
                product?.image
                  ? `https://srv14.optimgov.com/images/${product.image}`
                  : ""
              }
              boxSize={400}
              mx={1}
            />
            <Stack w={"fit-content"}>
              <Link
                // as={NextLink}
                href={`/front_office/${localeActive}/shopping-items?catId=${product?.category}`}
                fontSize={14}
                fontWeight={"semibold"}
                color={"#eac102"}
              >
                {product?.categoryName}
              </Link>
              <Text fontSize={33} fontWeight={"semibold"}>
                {product?.name}
              </Text>
              <PriceProvider
                normalPrice={product?.normalPrice!}
                sellingPrice={product?.sellingPrice!}
                fontSize={20}
              />
              <Divider />
              <Flex py={3} gap={8} alignItems={"flex-end"}>
                <AddToCartWithQty item={product!} />
                <Box pb={1}>
                  <AddToWishList item={product!} fontSize={30} />
                </Box>
              </Flex>
              <Divider />
              <Stack gap={5} px={5} py={7} fontSize={16} color={"#999999"}>
                <HStack>
                  <Text fontWeight={"semibold"}>{t("productCode")}</Text>
                  <Text>{product?.codeProduct}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight={"semibold"}>{t("availability")}</Text>
                  <Text>{stockAvail()}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight={"semibold"}>{t("type")}</Text>
                  <Text>{product?.categoryName}</Text>
                </HStack>
              </Stack>
            </Stack>
          </HStack>
        </Flex>
        <Show above={"lg"}>
          <Flex w={"20%"} py={7}>
            <RecommendedContainer products={allProds} />
          </Flex>
        </Show>
      </Flex>
      <TabsContainer product={product!} />
      <RelatedArticalsContainer catId={product.category} />
    </Box>
  );
};

export default ItemDetailsPage;
