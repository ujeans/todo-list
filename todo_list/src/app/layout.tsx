"use client";

import Gnb from "@/components/shared/Gnb";
import globalStyles from "@/styles/globalStyles";
import { Global } from "@emotion/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Global styles={globalStyles} />
        <Gnb />
        {children}
      </body>
    </html>
  );
}
