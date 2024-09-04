"use client";

import { Global } from "@emotion/react";
import { Provider } from "react-redux";

import globalStyles from "@/styles/globalStyles";

import Gnb from "@/components/shared/Gnb";

import { store } from "@/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 전역 스타일 적용 */}
        <Global styles={globalStyles} />
        {/* Redux 스토어를 컴포넌트 트리에 제공 */}
        <Provider store={store}>
          {/* 상단 네비게이션 바(Gnb) 컴포넌트를 렌더링 */}
          <Gnb />
          {children}
        </Provider>
      </body>
    </html>
  );
}
