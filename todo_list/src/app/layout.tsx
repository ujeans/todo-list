"use client";

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
        {children}
      </body>
    </html>
  );
}
