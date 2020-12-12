---
title: 'display'
slug: 'display'
author: Wontae Jeong
date: 2020-08-18
excerpt: 'block, inline, inline-block'
img: 'https://i.imgur.com/AZmJLam.jpg'
tags:
  - CSS
---

## Block, Inline

블록 레벨 엘리먼트 <span style="color: #E9DAAC; font-weight: bold">&lt;div&gt;</span>와 인라인 레벨 엘리먼트 <span style="color: #E9DAAC; font-weight: bold">&lt;span&gt;</span>을 통해
**block** 속성과 **inline** 속성의 차이점을 알아보고
또, **inline-block** 속성과는 또 무엇이 다른 것인지 알아보기로 하자.

```html
<!-- Block Level -->
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>

<!-- Inline Level -->
<span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
```

```css
div {
  background-color: yellow;
}

span {
  background-color: pink;
}
```

우선 비교를 위해 동일한 콘텐츠를 가지고 있는 <span style="color: #E9DAAC; font-weight: bold">&lt;div&gt;</span>와 <span style="color: #E9DAAC; font-weight: bold">&lt;span&gt;</span>를 작성하였고
구분이 쉽도록 배경 색상을 다르게 설정해두었다.

자, 그럼 바로 결과를 확인해보자.

<img src="https://i.imgur.com/1p2R3rh.jpg" alt="display 1" />
<br />

결과를 확인해보니 분명 <span style="color: #E9DAAC; font-weight: bold">&lt;div&gt;</span>와 <span style="color: #E9DAAC; font-weight: bold">&lt;span&gt;</span>은 같은 콘텐츠를 담고 있음에도 어째서인지 큰 차이를 보여주고 있다.

여기서 **첫 번째 차이점**이 드러나는 것이다.

<p className="box">
<br />

**block**은 한 영역을 차지 하는 박스형태의 성질을 말한다.

블럭 레벨 엘리먼트는 새로운 라인에서 시작하며 사용 가능한 전체 너비를 차지한다.즉, 상위 요소의 전체 폭을 차지하게 된다는 의미이다.

**inline**은 컨텐츠의 폭만큼 차지하는 성질을 말한다. 그렇기 때문에 기본적으로 block처럼 width값이 전체영역(100%)이 아닌 컨텐츠 영역 만큼 자동으로 잡히게 되며 높이 또한 폰트의 크기만큼 영역을 갖는다.
또한, 라인이 새로 추가되지 않고 동일한 선상에 표시한다.</p>

하지만 width와 height값을 지정하면 첫 번째 차이점을 없앨 수 있는 것 아닌가?
그럼 코드를 다시 한 번 수정해보자.

```css
div {
  width: 100px;
  height: 100px;
  background-color: yellow;
}

span {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

<p>
<span style="color: #E9DAAC; font-weight: bold">&lt;div&gt;</span>와 <span style="color: #E9DAAC; font-weight: bold">&lt;span&gt;</span>의 첫 번째 차이점을 없애기 위해 width값과 height값을 동일하게 주었다.
결과는 어떻게 나왔을까?</p>

<img src="https://i.imgur.com/j0vm1u7.jpg" alt="display 2" />
<br/>

예상과는 다르게 오히려 하나의 차이점을 더 보여주고 있다.
자, 우리가 발견한 **두 번째 차이점**이다.

<p className="box">
<br />

**block**은 width와 height값을 지정할 수 있지만
**inline**은 콘텐츠 영역만을 갖기에 width와 height값을 지정할 수 없다.</p>

자, 또 하나의 의문이 생긴다.
inline은 콘텐츠 영역만을 차지한다는 성질을 갖고 있다면 콘텐츠가 없이
width와 height값만을 가지고 있을 땐 어떻게 보이게 될까?

```html
<!-- Block Level -->
<div></div>
<div></div>
<div></div>
<div></div>

<!-- Inline Level -->
<span></span>
<span></span>
<span></span>
<span></span>
```

동일한 비교를 위해 <span style="color: #E9DAAC; font-weight: bold">&lt;div&gt;</span>와 <span style="color: #E9DAAC; font-weight: bold">&lt;span&gt;</span> 모두 콘텐츠를 지워보았다.

<img src="https://i.imgur.com/wd6WC89.jpg" alt="display 3" />
<br/>

<p>
<span style="color: #E9DAAC; font-weight: bold">&lt;div&gt;</span>는 콘텐츠가 없는 상황에서도 width와 height값을 가지고 영역을 갖고 있는 반면
<span style="color: #E9DAAC; font-weight: bold">&lt;span&gt;</span>은 콘텐츠가 없으니 당연하게도 차지하는 영역을 모두 잃었다.
</p>

## Inline-block

**inline**과 **block**의 차이점을 알아보니 **inline-block**을 어느 정도 예상해볼 수 있을 것 같다.
바로 코드를 수정하고 결과를 알아보자!

```css
div {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: yellow;
}

span {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

<img src="https://i.imgur.com/AXB8bwz.jpg" alt="display 4" />
<br/>

위의 결과를 통해 **inline-block**은 **inline**처럼 새로운 라인이 추가되지 않고 동일한 선상에 요소들을 나타내고 **block**처럼 width와 height값을 지정할 수 있다는 것을 알 수 있다.
