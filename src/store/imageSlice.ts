import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ImageState 인터페이스를 정의하여 이미지 상태의 타입을 지정
interface ImageState {
  imageUrl: string | null; // 이미지 URL은 문자열 또는 null일 수 있음
}

// 초기 상태를 정의
const initialState: ImageState = {
  imageUrl: null, // 초기 상태를 정의
};

// createSlice를 사용하여 Redux 슬라이스를 생성
const imageSlice = createSlice({
  name: "imageUrl", // 슬라이스의 이름
  initialState, // 초기 상태 설정
  reducers: {
    // 이미지 URL을 설정하는 리듀서 함수
    setImageUrl(state, action: PayloadAction<string | null>) {
      state.imageUrl = action.payload; // 전달된 페이로드로 이미지 URL을 업데이트
    },
  },
});

// setImageUrl 액션 생성자 내보내기
export const { setImageUrl } = imageSlice.actions;

// imageSlice의 리듀서를 기본 내보내기
export default imageSlice.reducer;
