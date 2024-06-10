import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Provider from "./chakraProvider";
import { Box } from "@chakra-ui/react";
import { bodyPadding } from "@/assets/global";
import NavBar from "@/components/Navigator/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre Murs Galerie",
  description: "Entre Murs Galerie",
};

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
            {children}
            <Footer />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
