---
date: '2024-04-24'
title: 'Test'
categories: ['test']
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

```diff-javascript
const a = 1;
+ const b = 2;
- const b = 3;
```
### 6. 인라인 코드
인라인 코드 테스트 `let a = 1` 입니다
