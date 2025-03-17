### 프로젝트 개요

React와 TypeScript를 기반으로 개발되었으며, React Query를 활용한 데이터 관리 및 useSyncExternalStore를 이용한 상태 관리를 적용하였습니다.

### 실행 방법

과제는 node 버전 20.12.2 환경에서 개발되었습니다.

```sh
npm install
npm run dev
```

`http://localhost:5173` 에 접속해 주세요.

### 폴더 구조

-   components: 재사용 가능한 UI 컴포넌트들이 위치하는 폴더입니다.
-   images: 이미지를 모아두는 폴더입니다.
-   lib
    -   remote: 외부 API 요청을 관리하는 파일들이 위치합니다. `axios`를 사용한 API 호출 로직이나 API 엔드포인트를 정의하는 파일들이 포함됩니다.
    -   queries: `react-query`의 query들을 관리하는 폴더입니다. 주로 데이터 조회와 관련된 API 호출을 비동기적으로 관리하는 로직을 정의합니다.
-   models: 타입 정의 파일을 모아두는 폴더입니다.
-   pages: 페이지 단위 컴포넌트들이 위치하는 폴더입니다.
-   utils: 다양한 데이터 변환 및 포맷팅 관련 함수들이 포함됩니다.
-   store: 전역 상태 관리를 위한 커스텀 스토어입니다.
-   styles: 전역 스타일 파일들이 위치하는 폴더입니다.

### 라이브러리

-   `react-router-dom`: 페이지 간 이동을 위한 라우팅을 처리하기 위해 사용했습니다.
-   `@tanstack/react-query`: API 데이터의 비동기 호출 및 상태 관리를 효율적으로 처리하기 위해 사용했습니다.
-   `axios`: REST API 통신을 위해 사용했으며, 간결하고 직관적인 API 호출을 위해 사용했습니다.
-   `sass`: 중첩 기능을 이용해 가독성을 높이고 스타일링을 간결하게 작성하기 위해 사용했습니다.
-   `classnames`: 조건부 클래스명을 쉽게 관리하고 가독성을 높이기 위해 사용했습니다.

### 강조하고 싶은 기능

-   컴포넌트 모듈화

BookList, BookItem, BookThumbnail 등 컴포넌트 단위로 명확히 역할을 분리하여 관리하고,
components 폴더 내 재사용 가능한 UI 요소를 정리하여 확장성을 확보했습니다.

-   useSyncExternalStore를 이용한 '찜' 상태 관리

찜 상태 여부를 구독하며, 변경이 일어난 항목에서만 리렌더링 발생하게 하여 다른 항목에는 영향을 주지 않는 방식으로 구현하였습니다.
