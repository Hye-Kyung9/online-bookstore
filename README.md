## 프로젝트 소개

Next15를 사용하여 만든 책 관리 애플리케이션입니다. 사용자는 책 목록을 확인하고, 책을 추가, 수정, 삭제할 수 있습니다.

1. 프로젝트 설치

npm install

2. 개발 서버 실행

npm run dev

http://localhost:3000

## 주요 기능

1. 책 목록(BookList) 조회

메인 페이지에서 책 목록이 표시됩니다.(10개씩 페이지네이션)

책 제목 또는 저자를 검색할 수 있습니다.

2. 책 추가(BookPostModal)

책 추가하기 버튼을 클릭하면 모달이 열립니다.

입력 폼을 통해 책 제목, 저자, 재고 등의 정보를 입력하고 추가할 수 있습니다.

3. 책 수정

<!-- 각 책 항목의 오른쪽 끝에 수정 버튼이 있습니다.

수정 버튼을 클릭하면 해당 책의 정보를 변경할 수 있는 모달이 나타납니다.

변경 사항을 입력 후 저장하면 목록이 업데이트됩니다. -->

4. 책 삭제

각 책 항목의 오른쪽 끝에 삭제 버튼이 있습니다.

삭제 버튼을 클릭하면 해당 책이 목록에서 제거됩니다.

## 주요 기술 스택

프레임워크: Next.js 15

HTTP : Axios

스타일링: Tailwind CSS

## API 엔드포인트

1. 책 목록 가져오기

GET /api/books

2. 책 상세 조회

GET /api/books/:id

3. 책 추가하기

POST /api/books

4. 책 수정하기

PUT /api/books/:id

5. 책 삭제하기

DELETE /api/books/:id
