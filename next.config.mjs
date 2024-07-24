import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/front_office",
    assetPrefix: "/front_office",
   
};

export default withNextIntl(nextConfig);
