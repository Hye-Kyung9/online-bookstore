Next15를 사용하여 만든 책 관리 애플리케이션입니다. 사용자는 책 목록을 조회 및 검색하고, 추가, 수정, 삭제할 수 있습니다.

## 프로젝트 설치 및 실행

### 프로젝트 설치

```bash
npm install
```

### 개발서버 실행

```bash
npm run dev
```

## 주요 기능

1. 책 목록(BookList) 조회
  - 메인 페이지에서 책 목록이 표시됩니다. (페이지당 10개)
  - 책 제목 또는 저자를 검색하여 원하는 책을 찾을 수 있습니다.

2. 책 상세 조회
  - 메인 페이지에서 책 목록이 표시됩니다. (페이지당 10개의 책)
  - 책 제목 또는 저자를 검색하여 원하는 책을 찾을 수 있습니다.

3. 책 추가(BookPostModal)
  - “책 추가하기” 버튼을 클릭하면 모달이 열립니다.
  - 책 제목, 저자, 재고 등의 정보를 입력하여 책을 추가할 수 있습니다.

4. 책 수정
  - 각 책 항목의 오른쪽 끝에 있는 수정 버튼을 클릭하면 해당 책의 정보를 수정할 수 있는 모달이 나타납니다.
  - 수정한 후 저장하면 목록이 업데이트됩니다.

5. 책 삭제
  - 각 책 항목의 오른쪽 끝에 있는 삭제 버튼을 클릭하면 해당 책이 목록에서 삭제됩니다.

## 주요 기술 스택
- 프레임워크: Next.js 15
- HTTP 클라이언트: Axios
- 스타일링: Tailwind CSS


## API

1. 책 목록 가져오기 GET /api/books

2. 책 상세 조회 GET /api/books/:id

3. 책 추가하기 POST /api/books

4. 책 수정하기 PUT /api/books/:id

5. 책 삭제하기 DELETE /api/books/:id
