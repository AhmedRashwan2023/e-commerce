import { bodyPadding } from "@/assets/global";
import PriceProvider from "@/components/ShoppingItems/PriceProvider";
import { products } from "@/data/products";
import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Link,
  Show,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { getLocale, getTranslations } from "next-intl/server";
import NextLink from "next/link";
import AddToCartWithQty from "./AddToCartWithQty";
import AddToWishList from "@/components/ShoppingItems/AddToWishList";
import TabsContainer from "@/components/ItemDetailed/ItemTabs/TabsContainer";
import RelatedArticalsContainer from "@/components/ItemDetailed/RelatedArticles/RelatedArticalsContainer";
import RecommendedContainer from "@/components/ItemDetailed/RecommendedItems/RecommendedContainer";

export async function generateStaticParams() {
  return [
    { itemId: "1" },
    { itemId: "2" },
    { itemId: "3" },
    { itemId: "4" },
    { itemId: "5" },
    { itemId: "6" },
    { itemId: "7" },
    { itemId: "8" },
    { itemId: "9" },
    { itemId: "10" },
    { itemId: "11" },
    { itemId: "12" },
    { itemId: "13" },
    { itemId: "14" },
    { itemId: "15" },
    { itemId: "16" },
    { itemId: "17" },
    { itemId: "18" },
    { itemId: "19" },
    { itemId: "20" },
    { itemId: "21" },
    { itemId: "22" },
    { itemId: "23" },
    { itemId: "24" },
    { itemId: "25" },
    { itemId: "26" },
    { itemId: "27" },
    { itemId: "28" },
    { itemId: "29" },
    { itemId: "30" },
    { itemId: "31" },
    { itemId: "32" },
    { itemId: "33" },
    { itemId: "34" },
    { itemId: "35" },
    { itemId: "36" },
    { itemId: "37" },
    { itemId: "38" },
    { itemId: "39" },
  ];
}

const ItemDetailsPage = async ({ params }: { params: { itemId: string } }) => {
  const product = products.find((prod) => prod.id === parseInt(params.itemId));

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
            <Image src={product?.image} boxSize={400} mx={1} />
            <Stack w={"fit-content"}>
              <Link
                as={NextLink}
                href={`/${localeActive}/shopping-items?catId=${product?.category}`}
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
                {/* <HStack>
                  <Text fontWeight={"semibold"}>{t("shipping")}</Text>
                  <Text>{`{shippingDetailsAndTiming}`}</Text>
                </HStack> */}
              </Stack>
            </Stack>
          </HStack>
        </Flex>
        <Show above={"lg"}>
          <Flex w={"20%"} py={7}>
            <RecommendedContainer />
          </Flex>
        </Show>
      </Flex>
      <TabsContainer product={product!} />
      <RelatedArticalsContainer />
    </Box>
  );
};

export default ItemDetailsPage;
