import { Flex } from "@chakra-ui/react";
import React from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const ItemEvaluationProvider = ({ starsNumber }: { starsNumber: number }) => {
  return starsNumber === 5 ? (
    <Flex color={"#ffc107"}>
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
    </Flex>
  ) : starsNumber === 4 ? (
    <Flex color={"#ffc107"}>
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStarBorder />
    </Flex>
  ) : starsNumber === 3 ? (
    <Flex color={"#ffc107"}>
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
    </Flex>
  ) : starsNumber === 2 ? (
    <Flex color={"#ffc107"}>
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
    </Flex>
  ) : (
    <Flex color={"#ffc107"}>
      <MdOutlineStar />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
    </Flex>
  );
};

export default ItemEvaluationProvider;
