# ![image](https://user-images.githubusercontent.com/99157565/213341943-0b61a0f7-dc4c-4798-b336-c4d465fc1475.png) Bullet Box (불렛 박스)

## 노션 팀 문서 https://www.notion.so/c453f0e24a254c46b0dfc43e40e5cdbc

## ⭐Convention
#### 1. **CSS**

- styled components ( 맨 아래에 코드 작성 )

#### 2. 폴더 이름규칙 ⇒ 소문자

#### 3. yarn 사용

#### 4. 파일명 이름규칙

- 자바스크립트와 HTML을 동시에 작성된 파일은 `.jsx`로 한다.
- 자바스크립트만 사용 → `.js`
- `.js` 파일명은 카멜 케이스 , `.jsx` 파일은 파스칼 케이스

#### 5.상태관리 ⇒ 리덕스, 리덕스 툴킷, 미들웨어 통신

#### 6. 단위: 크기 단위 사용

- 디자이너님께서 px로 주시면 → rem 변환
- 일반적인 상황에서는 % 나 vw, vh로 사용
- max-width/height, min-width/height 사용

#### 7. 함수명

- 카멜케이스
- 화살표 함수 사용

#### 8.  핸들러명 :

- 이름은 `___Handler` : 이벤트가 발생되었을 때 실행되는 실제 function

#### 9. Custom Hook

- Custom Hook의 이름은 `use___`


## Git 관련

### ✅ Commit Convention

커밋 메시지 앞에 Tag Name을 작성한다.

- `ex) feat: 로그인 API 기능 추가`
- `ex) refactor: posting service 내 인증 로직 필터로 분리`
 ![image](https://user-images.githubusercontent.com/99157565/213339743-2bbb9759-fcce-48ee-b4c1-05fc24b4e9e3.png)


## ✅ Issue Convention

- API 별로 이슈 작성
- 코딩 시작 전 이슈를 만들고 코딩 시작할 것
    - 예시

 ![image](https://user-images.githubusercontent.com/99157565/213340121-9aa6713a-e39c-43a0-a1a1-d420caf4f452.png)


    
- 이슈 템플릿을 활용해 형식에 맞는 이슈 생성
    - 예시
    
 ![image](https://user-images.githubusercontent.com/99157565/213340079-12c77247-0abf-41fa-af9c-1868f54d3c35.png)
    

## ✅ PR Convention

- 기능별로 PR을 보내자 (레포 → 서비스 → 컨트롤러를 아우르는 한 사이클)
- PR 제목 : [feat/refactor/docs/…] 이슈 이름


    
- PR 템플릿 형식에 맞게 작성

 ![image](https://user-images.githubusercontent.com/99157565/213340887-e27ca5a2-9f49-4541-bd0e-2aa3cdabe494.png)




## ✅ 브랜치 전략

- feature/#[이슈번호] → main
    - 예시 `feature/#1`
    - feature 브랜치에서 기능을 완성을 한 후 main 브랜치로 PR
- main에서 바로 배포
- git stash, git stash pop (개인 브랜치로 작성을 잊은 경우)

📌 **git flow 축약 방식**  **참고 : [https://cchloe0927.tistory.com/52](https://cchloe0927.tistory.com/52)

- main branch : 최종 배포 단계
- dev branch: 개발 브랜치
- feature/해당 이슈번호 : 개인 개발 단계

## ✅ PR 코드 리뷰

- PR 보낸 후 슬랙에 코드 리뷰 요청 (일단 시도)
- 리뷰어 지정은 PR 보낸 사람이 알아서 지정 (PR 시 지정 가능)
- PR 머지는 보낸 사람이 머지 
 <br>

 
## 👉Redux와 Redux-toolkit의 사용 이유
    - 기능적인 측면
        - 실습 프로젝트에 비해서 컴포넌트가 많아지고 페이지별 기능이 복잡해짐에 따라서 전역 상태관리가 필요하기 때문에 가장 널리 쓰이는 라이브러리 중 하나를 선택해서 사용.
        - Redux-toolkit 은 리덕스의 액션과 리듀서를 효율적으로 사용할 수 있기 때문에 선택.
        - Thunk 함수를 통해 미들웨어로 통신관련 코드 작성 및 관리 시 한번에 보고 효율적인 작업이 가능.
    - 학습적인 측면
        - 엔트리 레벨에서 새로운 기술을 학습하고 적용해서 프로젝트를 진행하는 것이 의미가 있다고 생각.
        - 로컬 상태관리와 전역 상태관리의 차이점을 비교하고 필요성을 경험하는 측면에서 의미가 있음.
        
## 👉Styled Components의 사용 이유.
    - CSS 코드를 작성하는 방법은 개발자마다 취향이 존재한다고 생각하지만 개인적으로는 CSS in JS에 적합한 패키지라고 생각하기 때문에 사용.
    - 컴포넌트 파일 안에서 JSX 태그와 스타일을 한번에 편집할 수 있다는 것이 장점이라고 생각.
