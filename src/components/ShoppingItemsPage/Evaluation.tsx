"use client";
import { RadioGroup, Stack, Radio, Flex } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";

const Evaluation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const evaluation = searchParams.get("evaluation");
  const initialEvaluation = evaluation ?? "5";

  const handleSelected = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("evaluation", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <RadioGroup defaultValue={initialEvaluation} onChange={handleSelected}>
      <Stack color={"#ffc107"}>
        <Radio value="5">
          <Flex>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </Flex>
        </Radio>
        <Radio value="4">
          <Flex>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
          </Flex>
        </Radio>
        <Radio value="3">
          <Flex>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </Flex>
        </Radio>
        <Radio value="2">
          <Flex>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </Flex>
        </Radio>
        <Radio value="1">
          <Flex>
            <MdOutlineStar />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </Flex>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default Evaluation;
