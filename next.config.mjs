/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "shorturl.at",
      "aceternity.com",
      "t3.ftcdn.net",
      "t4.ftcdn.net",
      "newmoonminerals.com",
      "5.imimg.com",
      "encrypted-tbn0.gstatic.com",
      "ae01.alicdn.com",
      "i.pinimg.com",
      "i.redd.it",
      "cdn11.bigcommerce.com",
      "cdn.articlefiesta.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
