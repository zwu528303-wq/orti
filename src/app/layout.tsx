import type { Metadata } from "next";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
