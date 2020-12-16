---
title: 'script 태그의 async와 defer 속성'
slug: 'async-vs-defer'
author: Wontae Jeong
date: 2020-10-14
excerpt: 'Javascript'
img: 'https://i.imgur.com/VmAEI0n.png'
tags:
  - Javascript
---

## &lt;Script&gt;

`async`, `defer`을 사용하지 않은 경우 웹 브라우저가 HTML을 렌더링 하는 과정에서 자바스크립트를 만나게 되면 HTML parsing 작업을 중단하고 스크립트를 **다운 > 파싱 > 실행**한다.

#

<p class="box">
인라인으로 작성된 스크립트의 경우는 다운로드를 생략한다.
</p>
그렇기 때문에 js 파일의 용량이 큰 경우나 인터넷이 느린 상황이라면 사용자가 페이지를 보기까지 많은 시간이 지체될 수 있다.

#

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Document</title>
    <script src="app.js"></script>
  </head>
  <body>
    <p>Hello, there!</p>
  </body>
</html>
```

## &lt;Script async&gt;

다른 경우로 HTML 렌더링 하는 과정에서 웹 브라우저가 async 속성을 사용한 스크립트 태그를 만난다면 스크립트를 내려받으면서 계속 HTML parsing 작업을 이어나가고 다운로드가 끝나면 스크립트를 실행한다. 스크립트를 실행하는 동안은 HTML parsing 작업을 잠시 미루게 된다.

#

이 경우에는 아직 id, class을 읽기 전 DOM 요소에 접근하려는 경우 오류가 생기기 때문에 javascript 의존성이 거의 없거나 DOM 요소 조작을 하지 않는 경우에만 사용하는 것이 좋다.

#

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Document</title>
  </head>
  <body>
    <script async src="app.js"></script>
    <p>Hello, there!</p>
  </body>
</html>
```

#

## &lt;Script defer&gt;

defer의 경우에는 어떨까?

HTML을 렌더링하다가 defer 속성을 사용한 스크립트 태그를 만나면 스크립트를 내려받으면서 HTML parsing을 계속 이어나가고 HTML parsing이 모두 끝나면 js 파일을 실행한다.

#

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Document</title>
  </head>
  <body>
    <script defer src="app.js"></script>
    <p>Hello, there!</p>
  </body>
</html>
```

<img src="https://i.imgur.com/RFALodm.png" alt="parsing">
