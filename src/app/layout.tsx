import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Providers } from "@/app/providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ORTI",
  description: "Olivia Rodrigo Type Indicator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          href="https://cdn.rhythm.umgapps.com/fonts/family/just-like-heaven/stylesheet.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
