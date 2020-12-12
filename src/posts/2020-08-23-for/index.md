---
title: 'for, for...in, for...of, forEach()'
slug: 'for'
author: Wontae Jeong
date: 2020-08-23
excerpt: '자바스크립트는 왜 이러한 반복문의 방법을 다양하게 갖고 있는 것일까?'
img: 'https://i.imgur.com/WMlOyTa.jpg'
tags:
  - Javascript
---

자바스크립트를 공부하다 보면 혹은 다른 개발자들의 멋진 코드들을 보다 보면
다양한 반복문을 사용하고 있다는 점을 발견할 수 있다.

자바스크립트는 왜 이러한 반복문의 방법을 다양하게 갖고 있는 것일까?
분명한 차이가 존재하는 것은 아닐까? 하는 원초적인 궁금증들에 대한 답을 정리해보기로 했다.

## for

`for`는 익히 알다시피 **초기값**, **조건**, 그리고 결과가 참일 때마다 **증가 혹은 감소**를 실행하는 **명령문**을 갖게 되며 그에 따라 해당 블록`{}`내의 작업들을 반복하는 것이다.

```javascript
const array = [];
array.length = 5;
array[0] = 1;

console.log(array);
// [ 1, <4 empty items> ]

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/* 1
   undefined
   undefined
   undefined
   undefined */
```

이번 글에서는 `empty items`에 대한 각기 다른 반응도 같이 살펴보기 위해 위와 같이 코드를 작성하였고, 위의 예시에서는 `for`에서는 모든 요소에 접근할 수 있다는 것을 보여주었다.

## .forEach()

이전에는 그저 `.forEach()`는 `for`보다 더 간결하게 반복문을 작성할 수 있는 것에 지나지 않을 거라고만 생각했었는데 이번 글에 대한 자료를 찾아보면서 몇 가지 차이점을 알게 되었다.

우선 ES5부터 등장한 배열 메소드`.forEach()`에 대한 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)의 설명을 읽어보고 예시를 보자!

<p className="box" style="padding: 20px 30px 0">

`.forEach()`는 주어진 **콜백 함수**를 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행합니다. 삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않습니다

</p>

[[MDN] Array.prototype.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```javascript
const array = [];
array.length = 5;
array[0] = 1;

console.log(array);
// [ 1, <4 empty items> ]

array.forEach(el => console.log(el));
// 1
```

벌써부터 차이점이 보이기 시작한다!

- 조건을 개발자가 정할 수 있었던 `for`문과는 달리 오름차순으로 한 번씩 실행한다.
- `break`와 같은 반복문 중단이 `.forEach()`에서는 이루어지지 않는다. 모든 요소에 접근해야 하는 상황이 아니라면 `.forEach()`는 불필요한 반복이 이루어질 수 있다.
- `.forEach()`는 `empty items`와 같은 속성의 요소에는 접근하지 않는다.

<p className="box" style="padding: 20px 30px 0">

**속도**의 차이도 분명 발생하는데 이는 아래 링크를 통해 확인할 수 있다.<br />
[[Joey Colon] Should You Stop Using .forEach() in Your JavaScript Code?](https://medium.com/better-programming/should-you-stop-using-foreach-in-your-javascript-code-efe1e86c78e5)

</p>

## for...in

- 깔끔하게 코드 작성이 가능한 `.forEach()`
- `.forEach()`에 비해 한눈에 들어오진 않지만 빠르고 조건에 맞춰 불필요한 반복을 막을 수 있는 `for`

그렇다면 장점들만 모아놓은 반복문은 없을까?

이러한 의문과 **배열은 곧 index라는 키를 가진 객체**라는 이유로 객체를 순회하는 `for...in`을 빌려와 배열에 사용하는 경우가 있지만 이는 예기치 않은 상황을 만들 수 있기 때문에 주의가 필요하다.

```javascript
const array = [];
array.length = 5;
array[0] = 1;
array.something = 'whatever';

Array.prototype.doSomething = function () {};

console.log(array);
// [ 1, <4 empty items>, something: 'whatever' ]

for (const key in array) {
  console.log(key + ': ' + array[key]);
}

/* 0: 1
   something: whatever
   doSomething: function () {} */
```

위의 예시와 같이 `for...in`은 삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않으면서 자신은 가지고 있지 않지만 **prototype**으로 추가된 상위 객체들까지도 순회는 문제가 생기게 된다.

즉, `for...in`은 객체의 반복 가능한 모든 속성을 반환된다는 의미인데 이러한 문제점은 `nodelist` 또는 `HTMLCollection`를 **Array**로의 변화 과정 없이(`Array.from()` or `[...array]`) 순회할 때 생기는 문제의 답이 될 수 있다.

```html
<body>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <script>
    const divs = document.querySelectorAll('div);

    for (const key in divs) {
      console.log(key + ': ' + divs[key]);
    }
  </script>
</body>
```

실행결과는 다음과 같다

<img alt="console.log" src="https://i.imgur.com/qh6ew3J.jpg" />
<br />

.....무슨 설명이 더 필요하겠는가... `for...in`은 배열을 순회하는 상황에서는 사용하지 않도록 하자!

## for...of

무작정 그런 장점들을 다 포기하자는 건 아니다. 우리에겐 `for...of`가 있으니까!
ES6부터 등장한 문법으로 배열에 특화되어 있는 반복문이다!

바로 예시를 보자.

```html
<body>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <script>
    const divs = document.querySelectorAll('div);

    for (const el of divs) {
      console.log(el);
    }
  </script>
</body>
```

실행결과는 다음과 같다

<img alt="console.log" src="https://i.imgur.com/1GU2oUP.jpg" />
<br />

key를 가지고 오는 즉, **index**를 가지고 오는 `for...in`과는 다르게
`for...of`는 요소를 직접 가지고 온다. `break`등과 같은 반복문 중단도 가능하고

```javascript
const array = [];
array.length = 5;
array[0] = 1;
array.something = 'whatever';

Array.prototype.doSomething = function () {};

console.log(array);
// [ 1, <4 empty items>, something: 'whatever' ]

for (const value of array) {
  console.log(value);
}

/* 1
   undefined
   undefined
   undefined
   undefined */
```

위의 예시처럼 모든 요소에 접근할 수 있다.

---

이번 글을 정리하고 여러 자료를 찾아보면서 반복문들의 차이를 이해하고 조금 더 적절한 상황에서 사용할 수 있게 된 것 같다.
