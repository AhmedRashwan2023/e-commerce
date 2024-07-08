"use client";
import { bodyPadding } from "@/assets/global";
import { useWishlistContext } from "@/contexts/wishlistContext";
import {
  Image,
  Alert,
  AlertIcon,
  Text,
  Box,
  Link,
  Stack,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import RemoveFromWishList from "./RemoveFromWishList";
import RemoveAllFromWishList from "./RemoveAllFromWishList";
import { ItemProps } from "@/data/types";

const Wishlist = () => {
  const { wishlistItems } = useWishlistContext();
  const t = useTranslations("wishlist");
  const localeActive = useLocale();
  const direction = localeActive === "ar" ? "rtl" : "ltr";
  return (
    <Box px={bodyPadding} py={10}>
      <Stack dir={direction}>
        {wishlistItems.length === 0 && (
          <Alert status="warning" borderRadius={6}>
            <AlertIcon />
            <Text fontSize={17}>
              {t("emptyListText")}&nbsp;
              <Link
                as={NextLink}
                href={`/${localeActive}/shopping-items`}
                textDecoration={"underline !important"}
              >
                {t("emptyListLink")}
              </Link>
            </Text>
          </Alert>
        )}
        {wishlistItems.length > 0 && (
          <Stack gap={7}>
            <Heading as="h2" size="lg">
              {t("title")}
            </Heading>
            <TableContainer>
              <Table variant="simple">
                <Tbody>
                  {wishlistItems.map((item: ItemProps, index: number) => (
                    <Tr key={index}>
                      <Td>
                        <Link
                          href={`/${localeActive}/shopping-items/${item.id}`}
                          as={NextLink}
                        >
                          <Image
                            src={item.image}
                            alt={`Image of ${item.name}`}
                            boxSize={"70px"}
                          />
                        </Link>
                      </Td>
                      <Td>
                        <Text>{item.categoryName}</Text>
                      </Td>
                      <Td>
                        <Text>{item.name}</Text>
                      </Td>
                      <Td>
                        <RemoveFromWishList item={item} />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex justifyContent={"flex-end"}>
              <RemoveAllFromWishList />
            </Flex>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Wishlist;
