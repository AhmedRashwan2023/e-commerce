import ItemCard from "@/components/ShoppingItemsPage/ItemCard";
import ItemCardContainer from "@/components/ShoppingItemsPage/ItemCardContainer";
import { ItemProps } from "@/data/types";
import { postRequest } from "@/utils/db";
import { SimpleGrid } from "@chakra-ui/react";

const RelatedArticalsContainer = async ({ catId }: { catId: number }) => {
  const userWishList = [1, 4, 5];
  const products = await postRequest(
    `/api/products/getActiveProds?cat_Id=${catId}`,
    {}
  );
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} pb={10}>
      {products.map(
        (product: ItemProps, index: number) =>
          index < 4 && (
            <ItemCardContainer key={index}>
              <ItemCard item={product} />
            </ItemCardContainer>
          )
      )}
    </SimpleGrid>
  );
};

export default RelatedArticalsContainer;
