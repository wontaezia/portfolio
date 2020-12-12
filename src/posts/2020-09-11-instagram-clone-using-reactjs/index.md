---
title: 'westargram-react 후기'
slug: 'instagram-clone'
author: Wontae Jeong
date: 2020-09-11
excerpt: 'React.js를 이용한 인스타그램 클론'
img: 'https://i.imgur.com/RCarf6s.jpg'
tags:
  - Project
  - React.js
  - SCSS
  - Javascript
---

<div class="imageContainer" style="max-width: 680px; margin: 0 auto">
<img alt="westagram" src="https://i.imgur.com/mCNpXAl.gifv" />
</div>

### 🙌 소개

- `React.js`를 이용한 인스타그램 클론
- `CRA(create-react-app)`를 사용한 초기 세팅
- `Git`을 사용한 팀 협업 과정
- `MockData`를 이용하여 UI 구현 후 `componentDidMount()`와 `fetch()`를 이용해 백엔드와의 통신
- Code refactoring

### 🎉 프로젝트 기간

- 2020.08.31 ~ 2020.09.11

### 🛸 사용 기술

<p className="box" style="padding: 20px 30px">
React
<br/>
JavaScript
<br/>
SASS
<br/>
Git
</p>

### 🚀 구현 기능

&nbsp;&nbsp;**로그인 페이지**

<img alt="login page" src="https://i.imgur.com/RCarf6s.jpg" />
<br/>
<img alt="login page" src="https://i.imgur.com/Tze4t50.jpg" />
<br/>

- 슬라이드 `fade-in / fade out`
- 유효성 검사 확인
- `withRouterHOC` 로 페이지 이동 구현 - `this.props.history.push('/signup')`
- 서버와의 통신 `fetch()`
- media query를 이용한 반응형 구현
- `MockData`와 `map()`을 활용해 sitemap 구현

&nbsp;&nbsp;**메인 페이지**

<img alt="main page" src="https://i.imgur.com/aAknv3I.jpg" />
<br/>
<img alt="main page" src="https://i.imgur.com/vfj9pGi.jpg" />
<br/>

- 댓글 추가 / 삭제 / 좋아요 기능
- 유저 검색 기능
- 유저 아이콘 클릭 시 서브 메뉴 토글
- `Mockdata`와 `map()`을 활용하여 컴포넌트 활용
- media query를 이용한 반응형 구현

### ✍ 기억하고 싶은 코드

```jsx
  constructor() {
    super();
    this.state = {
      isChecked: false,
      id: '',
      password: '',
    };
  }

  goToMain = () => {
    const { isChecked, id, password } = this.state;

    isChecked &&
      fetch('http://3.34.133.239:8000/account/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: id,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.Authorization) {
            localStorage.setItem('token', result.Authorization);
            this.props.history.push('/main-wontae');
          } else if (result.message === 'UNAUTHORIZED') {
            alert('이메일 / 비밀번호를 확인해주세요');
          }
        });
  };

  saveData = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      this.checkValidation
    );

    if (e.key === 'Enter') {
      this.goToMain();
    }
  };

  checkValidation = () => {
    const { id, password } = this.state;
    const isChecked = id.includes('@') && password.length >= 5;
    this.setState({
      isChecked,
    });
  };

  render() {
    retrun (
      ...
          <div onKeyUp={this.saveData} className="form">
            <input
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input name="password" type="password" placeholder="비밀번호" />
            <button
              type="submit"
              className={isChecked ? 'isActive' : null}
              onClick={this.goToMain}
            >
              로그인
            </button>
          </div>
      ...
    )
  }

```

- 비구조화 할당으로 가독성 높이기
- `fetch()` 함수로 서버와의 데이터 통신
- `className`의 동적인 사용
- 명확한 함수, 변수, 클래스 이름
- `Input`의 name과 계산된 속성명`(computed property names)` 이용하기

<iframe src="https://player.vimeo.com/video/456813785" width="680" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
