import { bodyPadding } from "@/assets/global";
import { HStack, Link, Image, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { useLocale } from "next-intl";
import { ReactNode } from "react";

const AccountPagesHeader = ({ children }: { children: ReactNode }) => {
  const localeActive = useLocale();
  return (
    <Flex gap={3} py={4} flexDir={"column"}>
      <Flex px={bodyPadding} justifyContent={"space-between"}>
        <Link
          // as={NextLink}

          href={`/${localeActive}`}
        >
          <HStack minW={100} w={100}>
            <Image alt="logo" src={"/images/header/RM.png"} boxSize={50} />
            <Image alt="logo" src={"/images/header/dgapr.png"} boxSize={50} />
          </HStack>
        </Link>
        {children}
      </Flex>
      <hr style={hrStyle} />
    </Flex>
  );
};

export default AccountPagesHeader;

const hrStyle = {
  borderBottom: "1px solid silver",
  boxShadow: "0 .5px 1px .5px silver",
};
