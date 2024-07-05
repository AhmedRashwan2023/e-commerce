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

const ItemDetailsPage = async ({ params }: { params: { itemId: string } }) => {
  const product = products.find((prod) => prod.id === parseInt(params.itemId));
  const localeActive = await getLocale();
  const t = await getTranslations("itemDetailed");
  return (
    <Box px={bodyPadding}>
      <Flex gap={6}>
        <Flex w={{ base: "100%", lg: "80%" }} py={7}>
          <HStack alignItems={"flex-start"} w={"100%"}>
            <Image src={product?.image} boxSize={400} mx={1} />
            <Stack w={"100%"}>
              <Link
                as={NextLink}
                href={`/${localeActive}/shopping-items?catId=${product?.category}`}
                fontSize={14}
                fontWeight={"semibold"}
                color={"#eac102"}
              >
                CategoryName
              </Link>
              <Text fontSize={33} fontWeight={"semibold"}>
                Item Name
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
                  <AddToWishList
                    itemId={product?.id!}
                    inWishList={false}
                    fontSize={30}
                  />
                </Box>
              </Flex>
              <Divider />
              <Stack gap={5} px={5} py={7} fontSize={16} color={"#999999"}>
                <HStack>
                  <Text fontWeight={"semibold"}>{t("productCode")}</Text>
                  <Text>{`{codeProduit}`}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight={"semibold"}>{t("availability")}</Text>
                  <Text>{`{inStock} true/false`}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight={"semibold"}>{t("type")}</Text>
                  <Text>{`{categoryName}`}</Text>
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
      <TabsContainer />
      <RelatedArticalsContainer />
    </Box>
  );
};

export default ItemDetailsPage;
