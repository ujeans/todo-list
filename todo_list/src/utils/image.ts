// 이미지 업로드
export const uploadImage = async (file: File): Promise<{ url: string }> => {
  // FormData 객체를 생성하고 파일을 추가
  const formData = new FormData();
  formData.append("image", file);

  // 이미지 업로드 API 호출
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ujin/images/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  const data = await response.json();

  return data;
};
