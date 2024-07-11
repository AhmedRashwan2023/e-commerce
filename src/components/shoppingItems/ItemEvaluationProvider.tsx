import { Box, Flex } from "@chakra-ui/react";
import { MdOutlineStar, MdOutlineStarBorder, MdStarHalf } from "react-icons/md";

const ItemEvaluationProvider = ({
  starsNumber,
  fontSize,
}: {
  starsNumber: number;
  fontSize?: number;
}) => {
  return (
    <Box fontSize={fontSize ? fontSize : 15}>
      {starsNumber >= 4.5 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
        </Flex>
      ) : starsNumber >= 4 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdStarHalf />
        </Flex>
      ) : starsNumber >= 3.5 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdStarHalf />
          <MdOutlineStarBorder />
        </Flex>
      ) : starsNumber >= 3 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </Flex>
      ) : starsNumber >= 2.5 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdStarHalf />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </Flex>
      ) : starsNumber >= 2 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </Flex>
      ) : starsNumber >= 1.5 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdStarHalf />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </Flex>
      ) : starsNumber >= 1 ? (
        <Flex color={"#ffc107"}>
          <MdOutlineStar />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </Flex>
      ) : (
        <Flex color={"#ffc107"}>
          <MdStarHalf />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </Flex>
      )}
    </Box>
  );
};

export default ItemEvaluationProvider;
