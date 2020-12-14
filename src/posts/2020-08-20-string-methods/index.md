---
title: 'String Methods'
slug: 'string-Methods'
author: Wontae Jeong
date: 2020-08-20
excerpt: 'javascript string type methods'
img: 'https://i.imgur.com/sSu40NA.png'
tags:
  - Javasciprt
---

## charAt()

`string.charAt(index)`

#

문자열에서 인수 번째의 문자를 리턴하고 문자열이 해당 인덱스(인수)를 가지고 있지 않다면 공백을 리턴한다.

인자를 생략하면 기본값으로 0이 설정된다.

#

```js
'wecode'.charAt(2); // "c"
```

#

## charCodeAt()

`string.charCodeAt(index)`

#

charAt은 인수 번째의 문자를 리턴한다면

charCodeAt은 인수 번째의 유니코드 값을 리턴한다.

#

[[참조] 한글 유니코드](http://www.unicode.org/charts/PDF/UAC00.pdf) 10진수로 표기됨

## concat()

`string1.concat(string2, string3, ..., stringN)`

#

문자열과 문자열을 합친 새로운 문자열을 리턴한다.

기존의 문자열은 변하지 않는다.

#

```js
const string1 = 'Hello';
const string2 = 'Wecode';

console.log(string1.concat(' ', string2));
// "Hello Wecode"

console.log(string2.concat(', ', string1));
// Wecode, Hello"
```

## endsWith()

`string.endsWith(searchString, length)`

#

문자열의 끝이 특정 문자열로 끝나는지를 찾아 true, false 값을 리턴한다.

length는 선택사항이고 찾고자 하는 문자열의 길이를 의미한다.

기본값은 문자열의 전체 길이이다.

#

```js
'wecode'.endsWith('de'); //  true
'wecode'.endsWith('abcde'); //  false
```

## includes()

`string.includes(searchString, position)`

#

해당 문자열이 인자로 받은 문자열을 포함하고 있는지 찾고 true 또는 false를 리턴한다.

position은 선택사항(기본값은 0)이고 찾기를 시작할 위치를 지정한다.

#

```js
'wecode'.includes('js'); //  false
'wecode'.includes('eco'); //  true
```

## indexOf()

`string.indexOf(searchValue, fromIndex)`

#

인수가 첫 번째로 들어있는 위치를 알려준다.

일치하는 값이 없다면 -1을 리턴한다.

searchValue의 기본값은 "undefined"이다.

fromIndex는 선택사항(기본값은 0)이고 찾기를 시작할 위치를 지정한다.

#

```js
'wecode'.indexOf('a'); //  -1
'wecode'.indexOf('o'); //  3
```

## lastIndexOf()

`string.lastIndexOf(searchValue, fromIndex)`

#

인수가 첫 번째로 들어있는 위치를 마지막에서부터 역순으로 센다.

이것도 indexOf()와 마찬가지로 일치하는 값이 없다면 -1을 리턴한다.

#

```js
'wecode'.lastIndexOf('a'); //  -1
'wecode'.lastIndexOf('o'); //  3
```

## repeat()

`string.repeat(count)`

#

문자열을 count(정수)만큼 반복해 새로운 문자열을 리턴한다.

## slice()

`string.slice(beginIndex, endIndex)`

#

beginIndex은 시작점을 의미하며 음수의 값이라면 문자열의 길이 + beginIndex으로 취급된다.

#

end는 선택사항이며 마지막 지점을 의미한다.

해당 인덱스 위치의 값은 포함되지 않으며 생략되는 경우 문자열 끝까지 출력된다.

이 역시 음수의 값이라면 문자열의 길이 + endIndex로 취급

#

기존 문자열을 바꾸지 않는다

## split()

`string.split(separator, limit)`

#

첫번째 인자(separator)를 기준으로 나누어진 문자열들을 배열로 반환한다.

separator와 limit 모두 선택사항이다.

## substr()

`string.substr(start,length)`

#

substring과 끝 지점을 지정하는 방식이 다른데 substr는 시작 지점에서부터 두 번째 인자까지의 문자열을 반환한다.

```js
'wecode'.substring(2, 4); // "code"
```

## substring()

`string.substring(from,to)`

#

charAt은 문자 하나를 읽어낸다면 substring은 문자열을 읽어낸다.

substr와는 다르게 두 번째 인자도 인덱스를 기준으로 한다.

```js
'wecode'.substring(2, 4); // "co"
```

## toLowerCase()

`string.toLowerCase()`

#

문자열을 소문자로 변환해서 반환한다. 기존의 값은 변하지 않음.

## toUpperCase()

`string.toUpperCase()`

#

문자열을 대문자로 변환해서 반환한다. 기존의 값은 변하지 않음.

## trim()

`string.trim()`

#

문자열 양 끝의 공백을 제거한 새로운 문자열을 반환. 기존의 값은 변하지 않음.

#

---

#

계속해서 업데이트 예정
