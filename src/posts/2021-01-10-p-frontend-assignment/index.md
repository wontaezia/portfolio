---
title: 'P사 Front-end Assignment'
slug: 'p-assignment'
author: Wontae Jeong
date: 2021-01-10
excerpt: '프론트엔드 사전 과제'
img: 'https://i.imgur.com/GonWkcO.png'
tags:
  - Project
  - SASS
  - Javascript
  - Webpack
---

<img src="https://i.imgur.com/2MkBVMf.png" alt="PlusX Assignment Homepage">

### 🙌 과제 설명

주어진 템플릿을 HTML, CSS, Javascript를 자유롭게 사용하여 인터렉션 구현

### 🙌 도움받은 것들

- `Trello`를 활용하여 프로젝트 진행 과정 정리
- `gsap`을 활용하여 애니메이션 구현
- `ionicons` 아이콘 사용

<img src="https://i.imgur.com/pmJvE76.jpg" alt="Trello">

### 🙌 기획

- 기존에 있는 랜덤 패턴의 도형에 영감을 받아 익살스러운 일러스트레이터의 포트폴리오 사이트 구현
- 포트폴리오 특성에 맞게 사용자가 원하는 정보를 전달하기 (내가 누구인지, 나는 어떤 프로젝트를 진행하는지, 연락할 수 있는 방법은 어떤 것인지 등등)

### 🎉 프로젝트 기간

- 2021.01.07 ~ 2021.01.10

### 🛸 사용 기술

<p class="box">
JavaScript
<br/>
SASS/SCSS
<br/>
Webpack
<br/>
GSAP
<br/>
Git
<br/>
</p>

### ✍ 기억하고 싶은 코드

##### 1. reflow

```js
const setDefaultCursor = evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set('.cursor', {
    x: mouseX,
    y: mouseY,
  });

  gsap.to('.shape', {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
};

document.body.addEventListener('mousemove', setDefaultCursor);
```

위의 코드는 기본 커서를 바꾸는 코드다. 어렵지 않고 새롭지 않은 코드일지 모르지만 **기억하고 싶은 코드**로 뽑은 이유는 따로 있다.

#

이전에는 `mousemove` 이벤트를 활용한 커서 변경을 꺼려했었는데 그 이유는 실제적으로 느껴지는 버벅이는 현상때문이었다. 하지만 이번에 `gsap`을 활용하면서는 버벅이는 현상이 나타나지 않았다.

#

<p class="box">과연 차이점은 어떤 것이기에 이렇게 다른 것일까?
</p>

<a href="https://wit.nts-corp.com/2017/06/05/4571" target="_blank">[김원준님 블로그] CSS 애니메이션 성능 개선 방법(reflow 최소화, will-change 사용)</a>

#

#

```js
const setDefaultCursor = evt => {
  const cursor = document.querySelector('.cursor');
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
};

document.body.addEventListener('mousemove', setDefaultCursor);
```

위 포스팅을 읽고나니 기존에 나는 `left`, `top`값을 수정하여 생성된 DOM 노드의 레이아웃(너비, 높이 등) 변경 시 영향받는 모든 노드(자식, 부모)의 수치를 다시 계산하여 렌더 트리를 재생성하는 작업인 `reflow`를 계속하기 때문이 아닌가 생각된다. 아직은 많이 어렵지만 기억하고 찾아보며 공부하고 싶어졌다!

#

---

#

##### 2. Intersection Observer API

```js
const observed = document.querySelectorAll('.observed');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const element = entry.target;

    if (entry.isIntersecting) {
      gsap.fromTo(
        element,
        {
          y: '-300px',
          opacity: 0,
        },
        {
          ease: 'back.out(1.7)',
          duration: 1.25,
          y: 0,
          opacity: 1,
        }
      );
    }
    if (!entry.isIntersecting) {
      gsap.to(element, {
        y: 0,
      });
    }
  });
});

observed.forEach(each => {
  observer.observe(each);
});
```

이전에 `책메이트` 프로젝트를 진행하면서 예원님이 무한 스크롤을 이 기능으로 만들었을 때 정말 놀랐었다.

이벤트를 걸어서 하나하나 비교하지 않아도 알아서 확인해주다니..!!

이 기능을 통해 scroll trigger 애니메이션 효과를 주면 좋을 것 같다는 생각에 처음 적용해보았다.

앞으로 많이 사용하게 될 것 같은 기능이다.

#

---

#

##### 3. SCSS @each

```scss
.card {
  @each $photo in $photos {
    &:nth-child(#{$photo}) .card__background {
        background: url(../image/card#{$photo}.jpeg) center no-repeat;
        background: url(../image/card#{$photo}.png) center no-repeat;
        background-size: contain;
        background-color: $beige;
    }
  }
```

이 기능 역시 있다는 것만 알고 있다가 처음 사용해보는 것인데 너무 편하다. React에 익숙해져서 모든 걸 다 map 돌리고 싶어졌는데 약간이라도 해소한 느낌..?

### 🔥 시도해보았던 방법들

##### 1. full page section slider

```js
const sections = document.querySelectorAll('section');
const content = document.querySelector('.main-content');
const links = document.querySelectorAll('nav li');

let spin = 0;
let canScroll = true;

const scrollContent = count => {
  content.style.transform = `translateY(-${count * 100}vh)`;
};

const handleActiveLinkColor = activeLink => {
  links.forEach((link, index) => {
    link.classList.add('isActive');
    activeLink !== index && link.classList.remove('isActive');
  });
};

const handleSpinValueOnScroll = evt => {
  if (!canScroll) return; //Early Return

  canScroll = false; // throttle (일정시간 동안 스크롤 중복 금지)

  const min = spin <= 0;
  const max = spin >= sections.length - 1;

  if (evt.deltaY > 0) {
    !max && (spin += 1);
  } else {
    !min && (spin -= 1);
  }

  scrollContent(spin);
  handleActiveLinkColor(spin);

  setTimeout(() => {
    canScroll = true;
  }, 1500);
};

const handleSpinValueOnClick = index => {
  spin = index;
  scrollContent(spin);
  handleActiveLinkColor(spin);
};

links.forEach((link, index) => {
  link.addEventListener('click', () => handleSpinValueOnClick(index));
});
window.addEventListener('mousewheel', handleSpinValueOnScroll);
```

위의 코드는 스크린을 각각의 section page별로 이동하는 슬라이드 형식으로 만들어 스크롤과 메뉴 버튼 클릭으로 조작하는 코드다. 이 코드를 사용했을 때 포트폴리오의 갯수 변화에 따른 구현 방식의 문제와 스크롤 오류로 인하여 제거했다.

#

---

#

##### 2. 로컬 환경에서의 module과 CORS

```html
<script defer type="module" src="./js/main.mjs"></script>
<script defer type="module" src="./js/intro.mjs"></script>
<script defer type="module" src="./js/cursor.mjs"></script>
<script defer type="module" src="./js/page.mjs"></script>
<script defer type="module" src="./js/randomShape.mjs"></script>
<script defer type="module" src="./js/animation.mjs"></script>
```

유지보수 가능성과 확장성 이외에도 자기만의 스코프를 가지고 있다는 점과 기본적인 defer, strict mode등 장점을 많이 가지고 있는 module.
최근에는 바닐라 자바스크립트를 사용할 일이 거의 없어서 직접 이렇게 구현해본 적은 없었는데 이번 과제를 기회삼아 구현해보았다.

#

<a href="https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu" target="_blank">[takeknowledge님 블로그] 로컬에서 CORS policy 관련 에러가 발생하는 이유</a>

#

하지만 위의 포스팅처럼 `<script>` 태그가 포함된 HTML 파일을 로컬에서 로드할 경우 자바스크립트 모듈 보안 요구사항으로 인해 CORS 오류가 발생하게 된다.
서버로 열면 괜찮지만 과제이기 때문에 `Webpack`으로 번들링 작업을 하여 하나의 js파일로 만들었다.

#

아직은 어려운 CORS와 SOP지만 이번 기회를 통해 정리해볼 시간을 가져야겠다.
