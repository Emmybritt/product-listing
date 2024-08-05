import type { Metadata } from "next";

import { inter } from "./fonts";
import "./globals.css";
import HomeTemplate from "./_commons/components/templates/home.template";
import CartProvider from "./_modules/products/infrastructure/context/carts.context";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    template: "%s | Kmart",
    default: "Kmart",
  },
  description: "Buy and sell your products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-body-default antialiased`}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <CartProvider>
          <HomeTemplate> {children}</HomeTemplate>
        </CartProvider>
      </body>
    </html>
  );
}
