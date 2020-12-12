---
title: '2st Project at Wecode! - Arket In Germany🇩🇪 (수정 중)'
slug: 'arket-clone'
author: Wontae Jeong
date: 2020-10-16
excerpt: 'Front-end (김진희, 손종일, 윤시훈, 정원태), Back-end (오가빈, 이도길), PM 김진희'
img: 'https://images.unsplash.com/photo-1586198438643-797e07a5a2ca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
tags:
  - Project
  - React.js
  - styled-components
  - Redux
  - Javascript
---

### 🙌 공통사항

- `Git`을 사용한 팀 협업 과정
- `squash, rebase`를 적용하여 commit 내역 관리
- `Trello`를 활용한 스크럼 방식 아래 프로젝트 진행

### 🙌 Front-end

- `React.js`를 이용한 클론
- `CRA(create-react-app)`를 사용한 초기 세팅
- `styled-components` 활용
- `Redux`를 이용한 전역 상태 관리
- `Hooks`를 이용한 컴포넌트 상태 관리
- `localStorage`와 `token`을 이용한 로그인 기능 구현
- `react-router, query string, path`로 동적 라우팅 구현
- Code refactoring

### 🙌 Back-end

- `Django`를 사용한 초기 세팅
- `Aquery`를 이용한 모델링
- `Bcrypt`를 이용한 비밀번호 암호화로 회원가입 기능 구현
- `PyJWT`
- `Mysql`
- Code refactoring

### 🎉 프로젝트 기간

- 2020.10.05 ~ 2020.10.16

### 🛸 사용 기술

<p className="box" style="padding: 20px 30px">

### Front-end

<br/>
React
<br/>
JavaScript
<br/>
styled-components
<br/>
Redux, react-redux
<br/>
Git
<br/>

### Back-end

<br/>
AqueryTool
<br/>
Python
<br/>
Django
<br/>
MySQL
<br/>
PyJWT / Bcrypt
<br/>
Git
</p>

### 🚀 구현 기능

&nbsp;&nbsp;**메인 페이지** - PM 장주희

<img className="gif" alt="main page" src="./images/main.jpg" />
<br/>

- slick 라이브러리를 이용한 슬라이드 구현
- js를 이용한 슬라이드 구현
- map 함수를 이용한 아이템 정렬
- 카테고리 클릭시 아이템 리스트 페이지로 이동

&nbsp;&nbsp;**회원가입, 로그인 페이지, 메뉴** - `윤시훈, 김성진`

<img className="gif" alt="nav" src="./images/nav.gif" />
<br/>
<img alt="sign-up page" src="./images/sign_up.jpg" />
<br/>
<img alt="sign-in page" src="./images/sign_in.jpg" />
<br/>

- 아이디, 이름
- at least one character
- 비밀번호
- 8-20자리 대문자, 숫자 포함
- 비밀번호 재확인
- 비민번호와 동일
- 생년월일
- 연도 - 4자리 숫자
- 월 - 1-12월 선택
- 일 - 1-31일까지 숫자
- 성별
- 남성/여성/선택안함 중 택 1
- 본인확인 이메일 (선택)
- 선택이기 때문에 빈칸 입력 가능
- 휴대전화
- ‘-’ 없이 11자리 입력
- token을 활용한 로그인

&nbsp;&nbsp;**상품 리스트 페이지** - `최예원, 이도길`

<img className="gif" alt="list page" src="./images/list.gif" style="max-width: 680px"/>
<br/>

- map함수를 이용한 아이템 정렬
- 필터에 따른 아이템 정렬 기능 구현
  (서버 연결 전에는 mock data를 sort함수로 분류했고,
  서버 연결 후에는 queryString 이용한 fetch 함수를 이용하였다.)
- 리스트뷰,이미지뷰,큰이미지뷰,갤러리뷰 4가지의 뷰스타일 전환
- 상품 리스트 출력개수 선택에 따른 페이지네이션
- 찜하기 기능 구현
- 상품 클릭 시 해당 상품 페이지로 이동
- 토글 버튼 구현

&nbsp;&nbsp;**상품 상세정보 페이지** - `정원태, 이도길, 김성진`

<img className="gif" alt="detail page" src="./images/detail_gif.gif" style="max-width: 680px"/>
<br/>

- Price 데이터로 적립금, 옵션 선택 시 총합 계산
- 데이터 차트 구현
- 스크롤에 따른 sticky nav구현
- 스크롤에 따른 sticky nav 색상 변화 및 클릭 시 특정 스크롤 이동 기능 구현
- 옵션 선택 기능 및 수량 추가에 따른 가격 계산 기능 구현
- sticky nav와 가격 및 옵션 자동 연동
- 마우스 hover시 제품 상세 이미지 변화
- 데이터 통신으로 보여주는 상품정보 테이블
- 포토리뷰 간략보기 4개씩 보여주기
- 리뷰 모달창
- 별점평가 및 리뷰 작성 기능

### ✍ 기억하고 싶은 코드

```jsx
class InformationTab extends Component {

  ...

  render() {
    retrun (
      ...
        <ul className="chart">
          {SHIP_DATA.map((data, index) => {
            const { id, option, count } = data;
            let ratio = parseInt((count / getTotalCount()) * 100);
            return (
              <li key={id}>
                <span className="option">{option}</span>
                <div className="line">
                  <div
                    className={
                      getMaxInCount() === index
                        ? 'activeLine max'
                        : 'activeLine'
                    }
                    style={{ width: `${ratio}%` }}
                  />
                  <div className="backgroundLine"></div>
                </div>
                <span
                  className={
                    getMaxInCount() === index ? 'count max' : 'count'
                  }
                >{`${count}건 (${count ? ratio : 0}%)`}</span>
              </li>
            );
          })}
        </ul>
      ...
    )
  }
}

function getTotalCount() {
  let counts = [];

  for (let data of SHIP_DATA) {
    counts.push(data.count);
  }

  return counts.reduce((accumulator, count) => accumulator + count, 0);
}

function getMaxInCount() {
  let max = 0;
  const counts = [];

  for (let data of SHIP_DATA) {
    counts.push(data.count);
  }

  max = Math.max(...counts);
  return counts.indexOf(max);
}
```

<img alt="chart" src="./images/data_chart.jpg" />
<br />

- `Reduce`메소드를 활용한 합계 계산
- 데이터 시각화 (chart)

### 🏆 보고 배우고 느낀 점

#### 팀워크

<br/>

위코드를 처음 들어와서 개발자에게 가장 중요한 것 중 하나는 커뮤니티 안에서의 소통 능력이라 배웠다.
사실 그 이야기를 처음 들었을 때는 의례 회사 생활에 필요한 하나의 덕목을 이야기하는 것이라 생각했었는데 이번 팀 프로젝트을 진행하면서 왜 개발자에게 커뮤니티가 중요한 것인지, 팀워크란 무엇이고 그 팀워크가 결과에 어떤 영향을 끼치게 되는지 가슴 깊이 느낄 수 있었다.

#### 식구가 된다는 것

<br/>
<p className="box">
식구가 뭐여? 식구란 말이여
<br/>
같이 밥먹는 입구녁이여~
<br/>
입구녁 하나 둘 셋 넷 다섯 여섯 나까지 일곱
<br/>
혼자살겠다고 나가서 밥먹는건 뭐여?
<br/>
그건 식구가아니고 호로쉑이여~ 그냐 안그냐?
<br/>
<span style="color: #E9DAAC; font-size: 13px">[영화 비열한 거리 中]</span>

</p>

팀이 정해지고 자리를 배정받고 나서부터 이미 내게는 큰 변화가 생겼다. 사실 이번 프로젝트를 진행하기 이전에는 위코드에서 버릇처럼 밥을 거르기 일쑤였던 나였는데 그런 내게 매 끼니를 함께하는 식구가 생겼다는 것이다.
역시 한국인은 밥으로 통한다고 했던가, 내가 밥을 먹는다는 이유 하나만으로도 쏟아지는 팀원들의 박수갈채(?) 속에서 이미 나는 한 식구의 일원이 되어 있었다.

#### 예상치 못한 난관

<br/>

그렇게 프로젝트가 시작되고 우리는 여러 가지 변수들을 만나 첫날의 대부분을 기획 회의에 할애하게 되었다. 나의 임무가 분명해진 첫날의 끝자락에 내가 맡은 상세페이지를 다시 하나하나 들여다보니 왜 이렇게 텍스트는 많고 스타일들은 각기 다른 것인지 영어에 능숙하지 않은 나는 그 많은 클래스 이름은 어떻게 지어야 할까 <span style="text-decoration: line-through;">좌절하며</span>고민하며 첫날을 마무리하게 되었다.

하지만 오지 않을 것 같던 잠도 눈치채지 못한 사이 찾아와 나를 잠들게 한 것처럼 해결책은 다음 날 전혀 예상치 못한 방법으로 내게 찾아왔다.
다음 날 새벽 6시, 눈을 떠보니 슬랙 메시지 한 통이 와있었는데

<img alt="시훈님의 슬랙 메시지" src="./images/suggestionforclassname.png" />
<br/>

정성스레 하나하나 클래스 이름을 고민해 주고 편집해 주신 시훈 님의 메시지였다.
정말 이 사진 파일과 응원 메시지를 보는 순간의 감정은 평생 잊을 수 없을 것 같다. 아니, 잊고 싶지 않다.

여러 가지 감정이 한꺼번에 터져 나왔는데 우선 너무너무 감사한 마음이 앞섰고 내가 너무 티를 내어 다른 팀원들을 불편하게 했던 것은 아니었을까 하는 후회 섞인 반성, 나도 누군가에게 도움이 되겠다는 다짐, 어떤 공동체의 일원이 된다는 것에 대한 감사함 등 모든 것이 한꺼번에 몰려왔었다.

#### 짜릿함

<br/>

다른 생각 없이 바로 위코드로 와서 작업을 시작했다. 정말 열심히 하고 싶었고 그 마음이 전해진 것인지 모든 것이 막힘없이 진행되었다. 그러다 시간이 생기면 내가 도움을 받았던 것처럼 나 또한 다른 이의 도움이 될 수 있는 방법을 찾아다니기도 했었는데 운이 좋게도 누군가에게 도움이 되는 순간들을 경험하기도 했다. 다른 개발자와 함께 고민하던 문제가 해결됐을 때의 짜릿함은 그 무엇과도 바꿀 수 없는 소중한 기억이 되고 나의 원동력이 되어주는 것 같다.

#### 커뮤니티

<br/>

다시 처음으로 돌아가 위코드를 처음 들어와서 개발자에게 가장 중요한 것 중 하나는 커뮤니티라 배웠었다고 했다.
이제는 왜 개발자에게 커뮤니티가 중요한 것인지, 팀워크란 무엇이고 그 팀워크가 결과에 어떤 영향을 끼치게 되는지 누구보다 가슴 깊이 느낄 수 있게 되었다.

이 글의 끝으로 그것들이 가능하게 해준 우리 팀원님들, 동기님들, 멘토님들에게 정말 감사하다는 말을 전하고 싶다.🙇‍♀️

#### + 팀원들에게

<br/>

제가 프로젝트 기간 동안 귀찮게도 많이 하고 밥투정(ㅋㅋㅋ)까지 부렸는데 언제나 따뜻하게 웃으면서 배려해 주시고 응원해 주셔서 정말 감사드립니다. 덕분에 저는 많은 것들을 보고 배우고 느낄 수 있었습니다. 모두 모두 고생하셨습니다!

<img alt="line friends store team" src="./images/bt21.JPG" />
