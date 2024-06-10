import { Flex, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";
import { IconType } from "react-icons";
import { LuTruck } from "react-icons/lu";
import { FaBox } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";

const ServicesCards = () => {
  const t = useTranslations("helpCenter");
  return (
    <Flex justifyContent={"space-evenly"} pb={19}>
      <ServiceCard icon={LuTruck} text={t("card1")} />
      <ServiceCard icon={FaBox} text={t("card2")} />
      <ServiceCard icon={RiRefund2Line} text={t("card3")} />
      <ServiceCard icon={FaMoneyBills} text={t("card4")} />
    </Flex>
  );
};

export default ServicesCards;

interface CardProps {
  icon: IconType;
  text: string;
}
const ServiceCard = ({ icon, text }: CardProps) => {
  const Icon = icon;
  return (
    <Flex
      flexDir={"column"}
      backgroundColor={"rgb(240,243,242)"}
      w={250}
      py={10}
      px={5}
      borderRadius={9}
    >
      <Text fontSize={50} px={3} pb={3} color={"rgb(91,108,117)"}>
        <Icon />
      </Text>
      <Text fontWeight={"semibold"} fontSize={16}>
        {text}
      </Text>
    </Flex>
  );
};
