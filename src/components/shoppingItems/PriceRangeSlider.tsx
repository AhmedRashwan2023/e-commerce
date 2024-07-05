"use client";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const PriceRangeSlider = () => {
  const t = useTranslations("shoppingItems");
  const router = useRouter();
  const searchParams = useSearchParams();

  const mixPriceString = searchParams.get("mixPrice");
  const maxPriceString = searchParams.get("maxPrice");

  const initialmixPrice = mixPriceString
    ? parseInt(mixPriceString) >= 6 &&
      parseInt(mixPriceString) < parseInt(maxPriceString!)
      ? parseInt(mixPriceString)
      : 6
    : 6;

  const initialmaxPrice = maxPriceString
    ? parseInt(maxPriceString) <= 300 &&
      parseInt(maxPriceString) > parseInt(mixPriceString!)
      ? parseInt(maxPriceString)
      : 300
    : 300;

  const [minPrice, setMin] = useState(initialmixPrice);
  const [maxPrice, setMax] = useState(initialmaxPrice);

  const setSearchParams = (mixPrice: string, maxPrice: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("mixPrice", mixPrice);
    params.set("maxPrice", maxPrice);
    return params.toString();
  };

  return (
    <>
      <RangeSlider
        // aria-label={["min", "max"]}
        defaultValue={[minPrice, maxPrice]}
        min={6}
        max={300}
        onChangeEnd={(val) => {
          setMin(val[0]);
          setMax(val[1]);
          router.push(
            `?${setSearchParams(val[0].toString(), val[1].toString())}`
          );
        }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex gap={2}>
        <Text>{`${t("filterPrice")}:`}</Text>
        <Text>
          {` ${minPrice} ${t("currency")} - ${maxPrice} ${t("currency")}`}
        </Text>
      </Flex>
    </>
  );
};

export default PriceRangeSlider;
