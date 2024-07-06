import ItemCard from "@/components/ShoppingItems/ItemCard";
import ItemCardContainer from "@/components/ShoppingItems/ItemCardContainer";
import { products } from "@/data/products";
import { SimpleGrid } from "@chakra-ui/react";

const RelatedArticalsContainer = () => {
  const userWishList = [1, 4, 5];

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} pb={10}>
      {products.map(
        (product, index) =>
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
