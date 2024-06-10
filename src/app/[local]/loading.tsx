import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      width={"100%"}
      height={"600px"}
      justifyContent={"center"}
      alignSelf={"center"}
    >
      <Spinner
        thickness="10px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#01114d"
        w={"100px"}
        h={"100px"}
        marginX="auto"
        marginY="auto"
      />
    </Flex>
  );
};

export default Loading;
