"use client";

import Gnb from "@/components/shared/Gnb";
import { store } from "@/store/store";
import globalStyles from "@/styles/globalStyles";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Global styles={globalStyles} />
        <Provider store={store}>
          <Gnb />
          {children}
        </Provider>
      </body>
    </html>
  );
}
