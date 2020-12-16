---
title: '브라우저가 화면을 그리는 과정'
slug: 'browser-rendering-process'
author: Wontae Jeong
date: 2020-12-13
excerpt: 'Web'
img: 'https://i.imgur.com/YSyFOln.png'
tags:
  - Web
---

<img src="https://i.imgur.com/YSyFOln.png" style="height: 30rem; object-fit: cover;" alt="paint">
<a href="https://icons8.com/illustrations/style--taxi" style="display: block; text-align: right;" target="_blank">Taxi by Natasha Remarchuk on icon8</a>

#

브라우저는 앞서 웹 서버에 웹 페이지 요청(request)을 하고 응답(response)해 화면에 그려낸다고 했다. 그렇다면 브라우저는 어떻게 데이터를 화면에 그리게 되는 것일까?

### Browser elements

우선, 웹 브라우저의 구조를 살펴보면 아래와 같이 설명할 수 있다.

#

- **사용자 인터페이스**: 브라우저 창에서 요청한 페이지를 보여주는 창 외에 사용자가 컨트롤 할 수 있는 부분. 주소표시줄, 이전/다음 버튼, 홈버튼, 새로고침/정지 버튼 등이 있다.
- **브라우저 엔진**: 사용자 인터페이스와 렌더링 엔진 사이에 동작을 제어한다.
- **렌더링 엔진**: 요청한 URI를 브라우저 엔진에게 받아서 서버에게 전달하고 서버로부터 해당하는 데이터(HTML, CSS, Javascript)를 받아 파싱한 후 화면에 그려준다. Gecko, WebKit 등 다양한 렌더링 엔진이 존재한다.
- **네트워킹**: 렌더링 엔진으로부터 HTTP 요청 등을 받아서 네트워크 처리 후 응답을 전달한다.
- **자바스크립트 해석기**: Javascript를 해석하고 실행한다.
- **자료 저장소**: 쿠키와 같은 로컬 데이터를 저장한다.
- **UI 백엔드**: 렌더링 엔진에서 그려진 렌더 트리(render tree)를 브라우저에 그리는 역할

<img src="https://i.imgur.com/4u9xCOG.png" alt="browser elements">

### 브라우저의 동작 과정

각각의 역할을 알아보았으니 전체적인 과정을 살펴보자.

#

- 사용자가 URI을 입력하면 **사용자 인터페이스**는 입력된 URI를 **브라우저 엔진**에게 전달한다.
- **브라우저 엔진**은 해당하는 자료를 우선적으로 **자료 저장소**에서 찾아보고 쿠키에 저장이 되어있다면 이를 **렌더링 엔진**에게 전달한다. 이는 불필요한 데이터 통신을 줄이기 위함인데 이를 **캐싱**이라 한다.
- **렌더링 엔진**은 받아온 자료를 분석하며 URI 데이터는 **네트워킹, 자바스크립트 해석기, UI 백엔드**로 전달된다.
- 이때 통신 레이어에 추가 데이터가 있다면 추가 데이터를 요청하고 응답할 때까지 기다린다.
- 응답받은 데이터에서 HTML, CSS는 렌더링 엔진이 파싱하고 Javascript는 **자바스크립트 해석기**로 전달되어 파싱한다.
- **자바스크립트 해석기**는 파싱의 결과를 렌더링 엔진에게 전달하여 렌더링 엔진이 파싱했던 Dom tree를 조작한다.
- 완성된 Render tree는 **UI 백엔드**로 넘어가 화면에 그려지게 된다.

### 렌더링 엔진

<img src="https://i.imgur.com/fmcMsKm.png" alt="browser rendering process">

1. HTML을 파싱해 DOM 트리를 빌드한다.

2. CSS를 파싱해 CSSOM 트리를 빌드한다.

3. DOM, CSSOM을 합쳐서 렌더 트리를 만든다.

4. 렌더 트리에서 레이아웃을 실행해 각 노드의 형태를 계산한다.

5. 렌더 트리의 각 노드를 화면에 페인팅한다.

#

#
