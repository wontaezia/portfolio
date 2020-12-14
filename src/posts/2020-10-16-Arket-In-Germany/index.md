---
title: '2st Project at Wecode! - Arket In Germany🇩🇪'
slug: 'arket-clone'
author: Wontae Jeong
date: 2020-10-16
excerpt: 'Front-end (김진희, 손종일, 윤시훈, 정원태), Back-end (오가빈, 이도길), PM 김진희'
img: 'https://i.imgur.com/Z4fnV7M.gif'
tags:
  - Project
  - React.js
  - styled-components
  - Redux
  - Javascript
---

<iframe src="https://player.vimeo.com/video/490536052" width="640" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

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

<p class="box">
<b>Front-end</b>
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
<br/>
<b>Back-end</b>
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

### 🚀 내가 맡은 파트

**Redux 전역 상태 관리**

<img src="https://i.imgur.com/kmt3wcl.jpg" alt="redux">

#

```jsx
const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const RESET_CART_LIST = 'cart/RESET_CART_LIST';
const INCREASE_COUNT = 'cart/INCREASE_COUNT';
const DECREASE_COUNT = 'cart/DECREASE_COUNT';
const SET_TOTAL = 'cart/SET_TOTAL';
const GET_ITEMS = 'cart/GET_ITEMS';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeItem = items => ({
  type: REMOVE_ITEM,
  payload: items,
});

export const resetCartList = () => ({
  type: RESET_CART_LIST,
});

export const increaseCount = items => ({
  type: INCREASE_COUNT,
  payload: items,
});

export const decreaseCount = items => ({
  type: DECREASE_COUNT,
  payload: items,
});

export const setTotal = () => ({
  type: SET_TOTAL,
});

export const getItems = items => ({
  type: GET_ITEMS,
  payload: items,
});

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return updateItems(state, payload);
    case REMOVE_ITEM:
      return updateItems(state, payload);
    case RESET_CART_LIST:
      return {
        ...state,
        totalPrice: 0,
        totalCount: 0,
        items: [],
      };
    case INCREASE_COUNT:
      return updateItems(state, payload);
    case DECREASE_COUNT:
      return updateItems(state, payload);
    case GET_ITEMS:
      return updateItems(state, payload);
    default:
      return state;
  }
};

const updateItems = (state, payload) => {
  const { items } = state;
  const isArray = Array.isArray(payload);

  return isArray
    ? {
        ...state,
        items: [...payload],
        totalCount: payload.reduce((acc, { count }) => acc + count, 0),
        totalPrice: payload.reduce(
          (acc, { count, price }) => acc + count * price,
          0
        ),
      }
    : {
        ...state,
        items: checkCartItems(items, payload),
        totalCount: state.totalCount + 1,
      };
};

const checkCartItems = (items, payload) => {
  const isAddedToCart = items.find(item => item.id === payload.id);
  const AddedItem = item =>
    item.id === payload.id ? { ...item, count: item.count + 1 } : item;

  return isAddedToCart ? items.map(AddedItem) : [...items, payload];
};

export default cart;
```

- 액션 하나가 단 하나의 동작만 수행하기 위해 많이 나눴지만 결국 같은 형태의 함수가 실행된다면 굳이 나눠야했을까 싶기도 하다. 어떤 것이 좋은 것인지 더 알아보고 싶다. 가장 좋은 최적화는 무엇일까?

#

**메인, 리뷰 페이지** - `정원태 이도길`

#

<iframe src="https://player.vimeo.com/video/490535662" width="680" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

- `AWS S3` 와 `react-aws-s3` 라이브러리를 이용한 이미지 업로드 기능 구현
- 유저 확인 후 리뷰 수정/삭제 권한 부여
- 리뷰 CRUD 기능 구현

### ✍ 기억하고 싶은 코드

```jsx
// ReviewForm.js

import React, { useState, useRef } from 'react';
import S3 from 'react-aws-s3';

...

import {
  accessKeyId,
  secretAccessKey,
} from '../../../config';

export default function ReviewForm({ setReviewData }) {

...

  const handleFileChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const newFileName = file.name;
    const config = {
      bucketName: 'uploadtestdb',
      dirName: 'photos',
      region: 'ap-northeast-2',
      accessKeyId,
      secretAccessKey,
    };
    const ReactS3Client = new S3(config);
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    ReactS3Client.uploadFile(file, newFileName)
      .then((data) => setImageUrl(data.location))
      .catch((err) => console.error(err));
  };

...

// ImageUploader.js

export default function ImageUploader({ handleFileChange, fileInput }) {
  return (
    <Form className="uploadSteps">
      <File>
        <FileInput
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          multiple
        />
      </File>
    </Form>
  );
}

...
```

- `react-aws-s3` 라이브러리를 이용하여 `AWS S3` 에 이미지 업로드 (아직 AWS가 어렵다ㅠㅠ)

#

```jsx
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { API, reviewsTestToken } from '../../config';

export default function Reviews() {
  const [reviewData, setReviewData] = useState([]);

  const getReviewData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: reviewsTestToken,
      },
    };
    const res = await fetch(`${API}/reviews`, requestOptions);
    const { data } = await res.json();
    setReviewData(data);
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    ...
  )
```

- `async, await` 를 이용한 데이터 통신
