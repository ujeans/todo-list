import { configureStore } from "@reduxjs/toolkit";

import imageReducer from "./imageSlice"; // 이미지 관련 상태 관리를 위한 리듀서 불러오기

// Redux 스토어를 설정
export const store = configureStore({
  reducer: {
    image: imageReducer, // 이미지 슬라이스 리듀서를 스토어에 연결
  },
});

// RootState 타입을 정의하여 스토어의 상태 타입을 추론
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 타입을 정의하여 스토어의 디스패치 타입을 추론
export type AppDispatch = typeof store.dispatch;
