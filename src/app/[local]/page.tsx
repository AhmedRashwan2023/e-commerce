import { bodyPadding } from "@/assets/global";
import { Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <Box px={bodyPadding}>
      <h1>{t("title")}</h1>
    </Box>
  );
}
