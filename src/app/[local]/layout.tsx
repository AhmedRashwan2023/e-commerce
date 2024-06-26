import Footer from "@/components/Footer";
import NavBar from "@/components/Navigator/NavBar";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Provider from "./chakraProvider";
import "./globals.css";
import { getSession } from "@/services/auth";
import { CartWrapper } from "@/contexts/shoppingCart";

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
  const session = await getSession();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <CartWrapper>
              <NavBar session={session} />
              {children}
              <Footer />
            </CartWrapper>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
