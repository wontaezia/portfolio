---
title: 'float'
slug: 'float'
author: Wontae Jeong
date: 2020-08-19
excerpt: 'float / clear'
img: 'https://i.imgur.com/5tnpcbm.jpg'
tags:
  - CSS
---

<img alt="post" src="https://i.imgur.com/9DbJzxE.jpg" />
<br />

우리는 웹 서핑을 하다보면 이러한 레이아웃의 문서를 어렵지 않게 볼 수 있는데
`float`은 그러한 정렬을 도와주는 정렬 방법 중 하나이다.

코드 예시를 보고 살펴보자.

```html
<body>
  <img src="./CSS3.png" alt="CSS3 icon" />
  <p>Lorem ipsum dolor sit ....</p>
</body>
```

<img alt="float 1" src="https://i.imgur.com/KNtBs10.jpg" />
<br />

우선 `<img>`하나와 `<p>`문단 하나를 작성해보았을 때의 그려지는 결과이다.
이전 글에서 알아본 것처럼 `<p>`는 block-level이기 때문에 새로운 줄에 추가 되는 걸 볼 수 있다.

그럼 `<img>`에 `float`속성을 추가해보면 어떤 결과가 나올까?

```css
img {
  float: left;
}
```

<img alt="float 2" src="https://i.imgur.com/L2dssPG.jpg" />
<br />

이전과는 다르게 텍스트가 그림 왼쪽으로 붙어있는 걸 볼 수 있다.
그럼 이번에는 문단 하나를 더 추가해보자.

```html
<body>
  <img src="./CSS3.png" alt="CSS3 icon" />
  <p>Lorem ipsum dolor sit ....</p>
  <p>Lorem ipsum dolor sit ....</p>
</body>
```

<img alt="float 3" src="https://i.imgur.com/xNLSSwK.jpg" />
<br />

새로 추가한 문단까지도 영향을 받아 그림 옆으로 붙어버렸다.
이대로의 레이아웃을 원하면 이대로 괜찮겠지만 혹 새로 추가한 문단은 새로운 줄에 추가하고 싶어질 땐 어떻게 해야할까?

```html
<body>
  <img src="./CSS3.png" alt="CSS3 icon" />
  <p>Lorem ipsum dolor sit ....</p>
  <p class="clear">Lorem ipsum dolor sit ....</p>
</body>
```

```css
img {
  float: left;
}
.clear {
  clear: both;
}
```

그럴 땐 `clear`속성을 이용하면 가능하고 원하는 대로 `left, right, both`값을 지정할 수 있다.

<p className="box" style="padding: 20px 30px">

<span className="code">img</span>에 <span className="code" style="margin-bottom: 20px">float: right</span>를 추가한 예시

  <img alt="float 4" src="https://i.imgur.com/y1iMBsB.jpg"/>

</p>
