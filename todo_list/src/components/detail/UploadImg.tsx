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

interface uploadImgProps {
  imageUrl?: string | null;
  onImageUpload: (url: string) => void;
}

function UploadImg({ imageUrl, onImageUpload }: uploadImgProps) {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewImage, setPreviewImage] = useState<string | null>(
    imageUrl || null
  );

  useEffect(() => {
    if (imageUrl) {
      setPreviewImage(imageUrl); // 초기값으로 imageUrl 설정
    }
  }, [imageUrl]);

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

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ujin/images/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPreviewImage(data.url);
        onImageUpload(data.url);

        dispatch(setImageUrl(data.url));
      }
    }
  };

  const onClickFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Flex align="center" justify="center" css={add}>
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
