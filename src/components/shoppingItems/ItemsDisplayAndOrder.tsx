"use client";

import { HStack, Icon, Select } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { BsGrid } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";

const ItemsDisplayAndOrder = () => {
  const t = useTranslations("shoppingItems");
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialView = searchParams.get("view") ?? "grid";
  const displayString = searchParams.get("display");
  const initialDisplay = displayString ? parseInt(displayString) : 50;
  const initialOrderBy = searchParams.get("orderBy") ?? "featured";

  const changeViewToList = () => {
    const params = new URLSearchParams(searchParams);
    params.set("view", "list");
    router.push(`?${params.toString()}`);
  };
  const changeViewToGrid = () => {
    const params = new URLSearchParams(searchParams);
    params.set("view", "grid");
    router.push(`?${params.toString()}`);
  };
  const changeDisplay = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("display", event.target.value);
    router.push(`?${params.toString()}`);
  };
  const changeOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("orderBy", event.target.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <HStack wrap={"wrap"}>
      <Icon
        as={MdFormatListBulleted}
        boxSize={5}
        color={initialView === "list" ? "#38761d" : "#bcbcbc"}
        cursor={"pointer"}
        onClick={() => changeViewToList()}
      />
      <Icon
        as={BsGrid}
        boxSize={5}
        color={initialView === "grid" ? "#38761d" : "#bcbcbc"}
        cursor={"pointer"}
        onClick={() => changeViewToGrid()}
      />
      <select
        style={selectStyle}
        onChange={changeDisplay}
        defaultValue={initialDisplay ?? 50}
      >
        <option value={50}>{`${t("display")}: 50`}</option>
        <option value={30}>{`${t("display")}: 30`}</option>
        <option value={20}>{`${t("display")}: 20`}</option>
        <option value={10}>{`${t("display")}: 10`}</option>
      </select>
      <select
        style={selectStyle}
        onChange={changeOrder}
        defaultValue={initialOrderBy ?? "featured"}
      >
        <option value={"featured"}>{t("sortByFeatured")}</option>
        <option value={"priceLower"}>{t("sortByPriceLower")}</option>
        <option value={"priceHigher"}>{t("sortByPriceHigher")}</option>
        <option value={"date"}>{t("sortByDate")}</option>
      </select>
    </HStack>
  );
};

export default ItemsDisplayAndOrder;

const selectStyle = {
  padding: "8px 12px",
  backgroundColor: "#ffffff",
  border: "1px solid #bcbcbc",
  borderRadius: 4,
};
