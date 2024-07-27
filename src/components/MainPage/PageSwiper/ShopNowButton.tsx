import { Button, Link } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { ReactNode } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const ShopNowButton = ({ children }: { children: ReactNode }) => {
  const localeActive = useLocale();
  const ButtonIcon =
    localeActive === "ar" ? FaLongArrowAltLeft : FaLongArrowAltRight;
  return (
    <Link href={`/${localeActive}/shopping-items`}>
      <Button
        rightIcon={<ButtonIcon />}
        color={"#ffffff"}
        backgroundColor={"#000000"}
        variant="solid"
        w={"fit-content"}
        _hover={{ bg: "#3b3636" }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ShopNowButton;
