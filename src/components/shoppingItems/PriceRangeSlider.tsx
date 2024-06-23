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
import React from "react";

const PriceRangeSlider = () => {
  const t = useTranslations("shoppingItems");
  const router = useRouter();
  const searchParams = useSearchParams();

  const priceFromString = searchParams.get("priceFrom");
  const priceToString = searchParams.get("priceTo");

  const initialPriceFrom = priceFromString
    ? parseInt(priceFromString) >= 6 &&
      parseInt(priceFromString) < parseInt(priceToString!)
      ? parseInt(priceFromString)
      : 6
    : 6;

  const initialPriceTo = priceToString
    ? parseInt(priceToString) <= 300 &&
      parseInt(priceToString) > parseInt(priceFromString!)
      ? parseInt(priceToString)
      : 300
    : 300;

  const [minPrice, setMin] = React.useState(initialPriceFrom);
  const [maxPrice, setMax] = React.useState(initialPriceTo);

  const setSearchParams = (priceFrom: string, priceTo: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("priceFrom", priceFrom);
    params.set("priceTo", priceTo);
    return params.toString();
  };

  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
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
