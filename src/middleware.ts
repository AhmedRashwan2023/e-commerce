import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
export default createMiddleware({
  // A list of all locales that are supported
  locales: ["fr", "ar"],

  // Used when no locale matches
  defaultLocale: "fr",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|fr)/:path*"],
};
