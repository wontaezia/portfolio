---
title: 'position'
slug: 'position'
author: Wontae Jeong
date: 2020-08-19
excerpt: 'static, relative, absolute, fixed, sticky'
img: 'https://i.imgur.com/jxPLN48.png'
tags:
  - CSS
---

## static

**static**은 **default**값이다.

그렇기에 태그가 갖고 있는 혹은 설정된 `display`속성에 따라 문서에 그려지게 되고 `top`, `right`, `bottom`, `left`과 `z-index`의 프로퍼티의 설정값은 아무런 효과를 줄 수 없다.

static외의 다른 position값을 초기화할 때도 사용한다.

## relative, absolute, fixed

세 가지 포지션 모두 설정된 `top`, `right`, `bottom`, `left`값에 따라 이동한다는 사실은 같지만 기준을 생각하지 않는다면 우리는 원하는 레이아웃을 그릴 수 없게 될 것이다.

자, 그럼 그들이 움직이는 기준은 어떻게 다른 것일까?

### relative

본래 자신의 위치 즉, 기존 `position: static`이었을 때의 위치를 기억하고 그를 기준으로 삼아 설정된 값에 따라 이동하며 안쪽으로 이동한다.

### absolute

`position: static` 속성이 **아닌** 부모를 찾아 그를 기준으로 움직인다.

하지만 부모 중에 `position: relative, absolute, fixed, sticky`를 가진 부모가 없다면 `<body>`를 기준으로 잡는다.

즉, 절대적인 위치값을 가진다는 의미이다.

### fixed

현재 창에서 문서를 볼 수 있는 부분 즉, 뷰포트 영역을 기준으로 잡는다.

## sticky

**sticky**는 `position: static` 속성처럼 동작하다가 스크롤이 특정 지점에 도달하면 요소를 `position: fixed` 속성으로 바꿔 화면에 고정시킨다.

<p className="box">
<br />

**sticky**는 IE에서 지원하지 않는다.
[[참고] Can I use sticky? ](https://caniuse.com/#search=sticky)</p>
