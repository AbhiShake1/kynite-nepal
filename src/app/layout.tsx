import type { Metadata } from "next";
import { Comfortaa as Font } from "next/font/google";
import "./globals.css";
import Layout from "./_components/layout";
import Providers from "@/providers";

const font = Font({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kyanite Nepal",
  description: "Gems, jewelry, and accessories from Kyanite Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
