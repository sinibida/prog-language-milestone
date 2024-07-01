- 쿠키
- 세션 구현
- `cluster` 모듈

---

- 쿠키
- 세션 처리
- 라우팅

P: 웹 앱 구현의 기초...!

- server
  - **.write**
  - **.end**
- **fs.readFile(path, handler)**
  - => `(err, data) => {}`
- stream
  - **.write**
  - **.end**
  - .pipe

# 쿠키

**server.writeHead()**

**`302` = Redirection**
- `Location` 헤더 값

책과 다름: `toGMTString()` -> **`toUTCString()`**
- [관련 Stack Overflow](https://stackoverflow.com/questions/13154552/how-can-i-set-a-cookie-with-expire-time)

# 세션

ㅇ

---

4.3, 4.4: SKIP

# Cluster

- `cluster`
  - **.fork**
  - **.isPrimary**
  - **.on**
- **process.pid**
