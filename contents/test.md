---
date: '2024-04-24'
title: 'Test'
category: ['테스트']
tags: ['test']
summary: '테스트용 글입니다'
thumbnail: './test.png'
---

# 1. 테스트

## 2. 테스트

### 3. 테스트

### 4. 라인 하이라이팅

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

### 5. diff 테스트

```diff
const a = 1;
+ const b = 2;
- const b = 3;
```

```diff-javascript
const a = 1;
+ const b = 2;
- const b = 3;
```

### 6. 인라인 코드

인라인 코드 테스트 `let a = 1` 입니다

### 7. 형태 테스트

_안녕하세요_
**안녕하세요**
`안녕하세요`

- 안녕하세요
- 안녕하세요
  - 안녕하세요
  - 안녕하세요
    - 안녕하세요
    - 안녕하세요
      - 안녕하세요
      - 안녕하세요

### 8. 인용

> This is a first blockqute. 
>> This is a second blockqute. 
>>> This is a third blockqute.

### 9. 긴 제목 테스트 긴 제목 테스트 긴 제목 테스트 긴 제목 테스트 긴 제목 테스트 긴 제목 테스트

### 10. 기울임

*안녕하세요*

### 11. 취소선

~~안녕하세요~~


---
