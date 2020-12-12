---
title: 'DOM'
slug: 'dom'
author: Wontae Jeong
date: 2020-08-23
excerpt: 'DOM(Document Object Model)이란'
img: 'https://i.imgur.com/WMlOyTa.jpg'
tags:
  - Javascript
---

## DOM ?

`DOM(Document Object Model)`이란 `HTML` 문서를 계층화시켜 트리구조로 만든 객체 모델이라는 의미로 `document.body`와 같이 자바스크립트가 `HTML` 문서를 하나의 객체처럼 접근할 수 있게 만들어 자바스크립트를 통한 **`Element`, `Style`, `Attributes`, `Event` ** 제어기능을 가능하게 해주는 것이다.

## W3C DOM

브라우저는 제각기 고유한 기술을 이용하여 DOM 인터페이스를 구현한다.
그렇기에 이를 규정해주는 하나의 기준이 없다면 개발하는 환경은 너무 많은 경우의 수를 생각하게 될 것이다.

그러한 비효율적이고 불필요한 일이 생기지 않도록 만든 하나의 약속이 **`W3C DOM`**이다.

대부분의 브라우저는 그러한 규칙을 따르고 있지만 브라우저마다 기준 바깥의 추가 기능도 함께 제공하기 때문에 개발자들은 **호환성**을 항상 염두에 두어야 한다.

## DOM TREE

그럼 DOM은 어떤 식으로 생겼을까?

<img alt="DOM tree" src="https://i.imgur.com/F6kmVKV.jpg" />
<br />

[[w3schools] JavaScript HTML DOM 이미지 참조](https://www.w3schools.com/js/js_htmldom.asp)

`HTML` 문서를 이해하고 있다면 이를 어렵지 않게 이해할 수 있겠지만 조금의 특이점을 발견할 수 있다. 하나의 엘리먼트만이 하나의 노드가 될 거라 생각할 수 있는데 `DOM`에 따르면 태그 내의 문자(text) 역시 객체이고 화면에는 보이지 않는 `주석(comment)`마저도 역시 하나의 노드가 된다.

<p className="box" style="padding: 20px 30px">
위의 그림에서 하나의 블럭을 `node`라 칭한다.</p>

하지만 분명한 차이는 존재하는데 `text`노드와 `comment`노드는 문자열만 담을 수 있으며 자식 노드를 가질 수 없기에 항상 트리의 끝에서 `잎 노드(leaf node)`로 존재한다는 점이다.

## display: inline-block의 공백

```html
<!DOCTYPE html>
<html>
  <head>
    <title>title</title>
  </head>
  <body>
    <ul>
      <li class="list">list 1</li>
      <li>list 2</li>
      <li>list 3</li>
    </ul>
  </body>
</html>
```

<img alt="dom" src="https://i.imgur.com/HYVdXlT.jpg"/>
<br />

위의 예시 속 `DOM TREE`를 살펴보니 `text` 노드가 끼어있어야 할 자리가 아님에도 끼어있는 것처럼 보이지 않는가?

이는 `↵ (새로운 라인)`, `␣ (공백)`마저도 `text` 노드로 인식하기 때문인데

```
<!DOCTYPE HTML>
<html>
<head></head><body><div></div><div></div></body></html>
```

이러한 `HTML` 구조를 갖춰야만 비로소 `text` 노드가 없는 상태가 되는 것이다.
이는 `display: inline-block` 상태에서의 공백이 생기는 원리를 설명해 준다.

#### display: inline-block의 공백을 제거하는 두 가지 방법

- 상위 요소에 `font-size: 0` 속성을 주는 방법
- `<ul><li></li><li></li><li></li></ul>`와 같은 구조로 사이 `text`를 제거하는 방법
