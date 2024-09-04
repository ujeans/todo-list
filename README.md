# 할 일 목록을 관리하는 To Do 서비스 Todo List

## 프로젝트 사용하기
1. 프로젝트 클론
```
git clone
cd todo_list
```
2. 의존성 설치
```
npm install
```
3. 환경 변수 설정
.env 파일을 프로젝트 루트에 생성
```
NEXT_PUBLIC_API_URL=
```
4. 개발 서버 실행
브라우저에서 http://localhost:3000을 열어 애플리케이션을 확인할 수 있습니다.
```
npm dun dev
```

## 기술 스택
<img src="https://img.shields.io/badge/Nexttjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=&logoColor=white">

## 프로젝트 설명
```
src
 ┣ app
 ┃ ┣ items
 ┃ ┃ ┗ [itemId]
 ┃ ┃ ┃ ┗ page.tsx // 상세페이지
 ┃ ┣ test
 ┃ ┃ ┗ page.tsx // 공용 컴포넌트 테스트를 위한 페이지
 ┃ ┗ page.tsx // /페이지
 ┣ assets // SVG 이미지 모음
 ┃ ┣ icons
 ┃ ┗ images
 ┣ components
 ┃ ┣ detail // 상세페이지에서 사용되는 컴포넌트
 ┃ ┃ ┣ Buttons.tsx
 ┃ ┃ ┣ ItemList.tsx
 ┃ ┃ ┣ Memo.tsx
 ┃ ┃ ┗ UploadImg.ts
 ┃ ┣ home // /페이지에서 사용되는 컴포넌트
 ┃ ┃ ┣ DoneList.tsx
 ┃ ┃ ┣ EmptyList.tsx
 ┃ ┃ ┣ ListContainer.tsx
 ┃ ┃ ┣ SearchBar.tsx
 ┃ ┃ ┗ TodoList.tsx
 ┃ ┗ shared // 재사용성을 위한 공용 컴포넌트
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┣ CheckList.tsx
 ┃ ┃ ┣ CircularButton.tsx
 ┃ ┃ ┣ Container.tsx
 ┃ ┃ ┣ Flex.tsx
 ┃ ┃ ┣ Gnb.tsx
 ┃ ┃ ┣ Search.tsx
 ┃ ┃ ┗ Text.tsx
 ┣ store
 ┃ ┣ imageSlice.ts
 ┃ ┗ store.ts
 ┣ styles
 ┃ ┣ button.ts
 ┃ ┣ colorPalette.ts // 제시된 컬러 시스템 설정
 ┃ ┣ globalStyles.ts
 ┃ ┗ typoGraphy.ts // 제시된 폰트 시스템 설정
 ┣ types
 ┃ ┗ todo.ts
 ┗ utils
 ┃ ┣ image.ts
 ┃ ┗ item.ts
```
