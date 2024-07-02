# SemVer

```
<major>.<minor>.<patch>
```

- major: 하위호환이 안 될 정도로 큰 변화
- minor: 하위호환이 되는 버전 변화
- patch: 버그 해결 등 잡다한 변경점

## Version postfix

- `^`: minor 변경까지만 업데이트
  - `express@^1.1.1`
    - `express@1.8.0` -> update
    - `express@2.0.0` -> *NOPE!*
- `~`: patch 버전만 업데이트
- `>1.1.1`: 무조건 `1.1.1` 버전보다 높은 버전
  - dependency 관리에 사용될 듯?
- `@latest` = `@x` **!!!!!**
