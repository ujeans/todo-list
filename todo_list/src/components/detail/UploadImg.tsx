import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { colors } from "@/styles/colorPalette";

import Flex from "../shared/Flex";
import CircularButtonComponent from "../shared/CircularButton";

import Img from "@/assets/images/img.svg";
import AddIcon from "@/assets/icons/add.svg";

import { setImageUrl } from "@/store/imageSlice";

import { uploadImage } from "@/utils/image";

interface uploadImgProps {
  imageUrl?: string | null;
  onImageUpload: (url: string) => void;
}

function UploadImg({ imageUrl, onImageUpload }: uploadImgProps) {
  const dispatch = useDispatch(); // Redux 액션을 디스패치하기 위한 훅
  const fileInputRef = useRef<HTMLInputElement>(null); // 파일 입력 참조

  // 이미지 미리보기 상태 관리
  const [previewImage, setPreviewImage] = useState<string | null>(
    imageUrl || null // 초기 이미지 URL로 설정
  );

  // imageUrl이 변경될 때마다 미리보기 이미지를 업데이트
  useEffect(() => {
    if (imageUrl) {
      setPreviewImage(imageUrl); // 초기값으로 imageUrl 설정
    }
  }, [imageUrl]);

  // 이미지 파일이 변경될 때 호출되는 함수
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // 파일 이름 검증 (영어만 허용)
      const fileName = file.name;
      const isValidFileName = /^[a-zA-Z0-9._-]+$/.test(fileName);
      if (!isValidFileName) {
        alert("파일 이름은 영어로만 이루어져야 합니다");
        return;
      }

      // 파일 크기 검증 (5MB 이하만 허용)
      const fileSize = file.size;
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (fileSize > maxSize) {
        alert("파일 크기는 5MB 이하여야 합니다.");
        return;
      }

      try {
        // 파일을 서버에 업로드하고 URL을 받아옴
        const data = await uploadImage(file);
        setPreviewImage(data.url); // 미리보기 이미지 업데이트
        onImageUpload(data.url); // 부모 컴포넌트로 업로드된 이미지 URL 전달

        // Redux 상태 업데이트
        dispatch(setImageUrl(data.url));
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
  };

  // 파일 선택 창을 여는 함수
  const onClickFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 입력 요소를 클릭
    }
  };

  return (
    <Flex align="center" justify="center" css={add}>
      {/* 미리보기 이미지가 있으면 이미지 표시, 없으면 기본 이미지 표시 */}
      {previewImage ? (
        <StyledImage src={previewImage} alt="Uploaded Image" />
      ) : (
        <Img />
      )}
      <StyledInput
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      {/* 파일 업로드 팝업창이 띄워주는 버튼 */}
      <CircularButton styleType="plus" onClick={onClickFile}>
        <AddIcon />
      </CircularButton>
    </Flex>
  );
}

const add = css`
  position: relative;
  width: 384px;
  height: 311px;
  margin-right: 24px;
  background-color: ${colors.gray50};
  border: 1px dashed ${colors.slate300};
  border-radius: 24px;

  @media (max-width: 744px) {
    width: 100%;
  }
`;

const CircularButton = styled(CircularButtonComponent)`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

const StyledInput = styled.input`
  width: 60px;
  height: 60px;
  display: none;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export default UploadImg;
