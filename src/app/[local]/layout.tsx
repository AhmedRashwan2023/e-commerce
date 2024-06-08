import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Provider from "./chakraProvider";
import { Box } from "@chakra-ui/react";
import { bodyPadding } from "@/assets/global";
import NavBar from "@/components/Navigator/NavBar";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <NavBar />
            <Box px={bodyPadding}>{children}</Box>
            <Footer />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
