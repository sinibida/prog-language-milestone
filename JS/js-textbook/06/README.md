- 미들웨어
  - [목록](#express-middlewares)
  - Router 객체
- 템플릿 엔진
  - Pug(Jade)
  - EJS

---

express FRAMEWORK?

http://www.npmtrends.com

**pug 템플릿 엔진**

eslint:

```json
{
  "rules": {
    "typescript-eslint/no-var-requires": "off"
  },
  "parserOptions": {
    "sourceType": "commonjs"
  },
  "env": {
    "node": true
  }
}
```

ES6로 변환 (`express-generator`)

```
var ([^\s]+) = require\('([^']+)'\);
import $1 from '$2';

module.exports = ([^;]+);
export default $1;
```

- **debug**
  - 콘솔 로그 남기는 모듈
- **app(express)**
  - `.set('key', val)`
  - !: `http.createServer(app)`

# express middlewares

- **morgan**
- express
  - **json**
  - **urlencoded**
    - extended = `extended ? querystring : qs`
      - qs: 3rd party npm 패키지
- **cookieParser**
  - -> `req.cookie`
  - +) `cookieParser("signing key")`
- **express-session** -> 세션
- **connect-flash**: 일회성 메모리

?: 도대체 expressjs는 타이핑을 어떻게 처리하는 거지?

# 라우터

- **req.params**: slugs
- **req.query**: query들
  - 둘 다 object 타입
- res
  - **send**
  - **sendFile**
  - json
  - redirect
  - *render*

# 렌더링 엔진/템플릿

## Pug

(얘 React보다 나은데...?)

see: [sample.pug](./views/sample.pug)

- `each x in y`
- `if - else`
- `case - when`
- `include`
- !: `extends - block`

## EJS

(Obsidian의 Templater랑 상당히 유사!)

---

재밌다
