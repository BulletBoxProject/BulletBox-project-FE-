# <img width="50" alt="불렛박스 타이틀 이미지" src="https://user-images.githubusercontent.com/90745936/217717087-f38660df-ebd7-41de-bdf3-86079b522b77.png">  Bullet Box (불렛 박스)

### 스스로 불렛에 의미를 부여해서 적는 캘린더 서비스


![불렛 투두 간판 이미지](https://user-images.githubusercontent.com/90745936/217715941-6613b5c7-9d3e-4e37-b26a-88f8614c7cef.png)


### 📎 [Bullet Box 서비스 이용하기](https://bullet-box.com)

### 📎 [FrontEnd 노션 페이지](https://www.notion.so/1419ad4d03c54fb5937328ccbc6d7f66) 


------

### 목차

1. [Bullet Box 프로젝트 소개](#1-bullet-box-프로젝트-소개)
2. [기술 스택](#2-기술-스택) <br />
2-1. [Front-End](#-front-end) <br />
2-2. [서비스 아키텍처](#서비스-아키텍처)
3. [기술적 의사결정](#기술적-의사결정)
4. [코드 컨벤션](#코드-컨벤션)
5. [설치 패키지](#설치-패키지)

## 1. [Bullet Box] 프로젝트 소개 
- 불렛저널 방법을 적용한 일정관리 & 다이어리 서비스
- 다양한 불렛(기호)을 사용한 의미부여 투두리스트
- 자주 쓰는 할 일은 루틴으로, 할 일의 테마는 카테고리로 편리한 사용

<img width="49%" alt="불렛박스 소개이미지-1" src="https://user-images.githubusercontent.com/90745936/217719491-4833a378-57a2-45cb-836d-41ff91c99d92.png">  <img width="49%" alt="불렛박스 소개이미지-2" src="https://user-images.githubusercontent.com/90745936/217719503-024b988e-42e3-4bfd-ab55-37174ed89c9a.png">
<br/>
<img width="49%" alt="불렛박스 소개이미지-3" src="https://user-images.githubusercontent.com/90745936/217719514-3112bb85-a103-47cc-828e-10190ef900e6.png">  <img width="49%" alt="불렛박스 소개이미지-4" src="https://user-images.githubusercontent.com/90745936/217719518-a234cdf7-c2df-4796-bf5b-b5a60780f718.png">

서비스 MVP 개발기간: 22.12.30. - 23.02.04.

## 2. 기술 스택
### ✨ Front-End
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/REACT ROUTER-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<img src="https://img.shields.io/badge/REDUX-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/REDUX TOOLKIT-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/STYLED COMPONENTS-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/YARN-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">
<img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/AWS S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">

### 📏 Tool
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=GitHub&logoColor=white"><img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/SLACK-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
<img src="https://img.shields.io/badge/NOTION-000000?style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/DIAGRAM IO-F08705?style=for-the-badge&logo=diagrams.net&logoColor=white">

<br />
<br />
<br />

### 서비스 아키텍처
![Service Architecture](https://user-images.githubusercontent.com/90745936/217726285-7bca8acc-9e4e-46df-8d58-545df395aeae.png)

## 기술적 의사결정
<div >
 <br />
 <div><b > 📌 Redux</b></div>
  <br />
  <div><b>• 요구사항</b></div>
  <br />
  <div>&nbsp&nbsp- 컴포넌트의 양이 많아짐에 따라서 전역 상태관리를 위해 필요</div>
  <br />
    <div><b>• 선택지</b></div>
  <br />
  <div>&nbsp&nbsp- Redux, Recoil</div>
  <br />
    <div><b>• 기술을 선택한 이유 및 근거</b></div>
  <br />
   <div>&nbsp &nbsp &nbsp프로젝트 규모에 비례해서 스코프가 커지면 컴포넌트의 구조도 복잡해지는 것은 불가피합니다. 이런 상황에서는 Props Drilling의 문제가 발생할 수 있기 때문에 전역 상태 관리를 통해서 문제를 해결할 수 있습니다.    
전역 상태 관리를 통해서 부모 컴포넌트에 props에 의존에서 벗어날 수 있기 때문에 자료를 가공하고 통신하는 작업 과정에서 유용하게 사용할 수 있습니다. <br /><br />
  <div>&nbsp &nbsp &nbsp프론트엔드 기술을 선택할 때는 트렌드와 관련된 부분을 간과할 수 없다고 생각합니다. 다양한 전역 상태관리 라이브러리가 존재하지만 여전히 Redux가 가장 높은 점유율을 가지고 있습니다. <br /><br />
&nbsp&nbsp&nbsp 이와 관련해서 Redux는 우선 검증된 신뢰성 있는 라이브러리이기 때문에 사용 시 안정성을 확보할 수 있습니다. 그리고 향후 주니어 개발자로서 업무를 진행하는 과정에서도 보편적으로 쓰이는 기술을 먼저 익혀서 프로젝트 참여에 도움이 될 것이라 생각합니다.<br /><br />
&nbsp&nbsp&nbsp 단순히 개인 프로젝트, 소규모 프로젝트 만을 위한 선택이라면 상대적으로 보일러 플레이트 코드량이 적고 미들웨어 패키지가 내장되어 있는 장점을 가진 Recoil을 선택할 수도 있으나 널리 사용되는 기술을 익히는 것이 우선이라 생각했기 때문에 Redux를 선택하게 되었습니다. <br />
  
  </div>
 </div>
  <br />
 <div><b > 📌 Styled-Components</b></div>
  <br />
  <div><b>• 요구사항</b></div>
  <br />
  <div>&nbsp&nbsp- 리액트 개발환경에서 CSS를 스타일링을 사용하기 위한 기술적 선택 필요</div>
  <br />
    <div><b>• 선택지</b></div>
  <br />
  <div>&nbsp&nbsp- Styled-Components, CSS Module</div>
  <br />
    <div><b>• 기술을 선택한 이유 및 근거</b></div>
  <br />
  <div>&nbsp &nbsp &nbsp컴포넌트 내에서 클래스명 선언없이 jsx태그를 만들면서 바로 사용할 수 있기 때문에 코드 가독성을 높이며 컴포넌트화 하여 재사용을 높일 수 있습니다. <br /><br />
&nbsp&nbsp&nbsp 클래스명을 따로 작성하지 않고 렌더링 시 자동으로 클래스 명이 생성되기 때문에 네이밍 충돌이 없습니다.<br /><br />
&nbsp&nbsp&nbsp props를 전달할 수 있기 때문에 동적인 스타일링을 간단하게 적용할 수 있습니다. <br />
</div>

<br /><br />

## 코드 컨벤션
 #### 1. **CSS**

- styled components ( 맨 아래에 코드 작성 )

#### 2. 폴더 이름규칙 ⇒ 소문자

#### 3. yarn 사용

#### 4. 파일명 이름규칙

- 자바스크립트와 HTML을 동시에 작성된 파일은 `.jsx`로 한다.
- 자바스크립트만 사용 → `.js`
- `.js` 파일명은 카멜 케이스 , `.jsx` 파일은 파스칼 케이스

#### 5.상태관리 ⇒ 리덕스, 리덕스 툴킷, 미들웨어 통신

#### 6. 함수명

- 카멜케이스
- 화살표 함수 사용

#### 7.  핸들러명 :

- 이름은 `___Handler` : 이벤트가 발생되었을 때 실행되는 실제 function

#### 8. Custom Hook

- Custom Hook의 이름은 `use___`

#### 폴더 경로 설정

![image](https://user-images.githubusercontent.com/99157565/217842470-01dc2cd7-43a1-4e6d-aa23-99cb2d7722cd.png)

<br/><br/>

## 설치 패키지
 - yarn add react - v18.2.0
- yarn add axios - v1.2.2
- yarn add redux react-redux - v8.0.5
- yarn add react-router-dom - v6.6.1
- yarn add styled-components - v5.3.6
- yarn add react-redux @reduxjs/toolkit - v1.9.1
- yarn add react-calendar - v4.0.0
- yarn add react-cookie - v4.1.1

<br/><br/>
## 팀원 소개

### Front-End

#### 👤 [최선호](https://github.com/suno0140)

#### 👤 [이철화](https://github.com/Pablaw)
