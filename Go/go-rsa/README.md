Bonus: Implementing RSA Encryption w/ Go

# Related Math Topics / Algorithm

- Phi Function
- Fermat's Little Theorem
- Extended Euclidian algorithm
  - Bezout's Identity

## Understanding Extended Euclidian algorithm

```py
a = 105
b = 45

r0 = a
r1 = b
s0 = 1
s1 = 0
t0 = 0
t1 = 1

while r1 > 0:
    q = (r0 - r0 % r1) // r1
    r0, r1 = r1, r0 - r1 * q
    s0, s1 = s1, s0 - s1 * q
    t0, t1 = t1, t0 - t1 * q
    
print(r0, s0, t0)
print(f"{a} * {s0} + {b} * {t0} =", a * s0 + b * t0)

# 15 1 -2
# 105 * 1 + 45 * -2 = 15
```

# Mistake Note

- Used `mod phiN` instead of `mod n`

# Thoughts (KR)

생각보다 굉장히 신기했다. 이 코드에서 구현한 RSA 암호화 기법의 핵심은 **`n`과 `e`로 부터 `d`를 추측하기 '힘들다는' 점**인듯 하다. n과 e만 서로 공유하고, d만 송신자가 비밀로 가지고 있으면 된다.

무지막지한 지수로 해독하기 어려워진 메세지($m^e \mod n$)에 `d`라는 지수를 붙이면 바로 메세지가 복구되는 게 굉장히 멋지고 신기했다. 마치 '보면 기분좋아지는 영상 #14'같은 유튜브 영상처럼 딱 맞아 떨어지는 것이 기분 좋았다.

Go의 문법도 꽤나 다시 배울 수 있었다. 재귀를 활용한 지수 연산을 다시 구현해 본 것도 추억 돋아서 좋았다. 큰 지수와 함께 연산하려면 이러한 함수(`powerMod`)를 구현하는 것이 필수라 생각했다.

실제로는 이 RSA가 어떻게 활용될까? -> [관련 Wikipedia 헤딩](https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Signing_messages)

# Links

- https://en.wikipedia.org/wiki/RSA_(cryptosystem)
- https://www.geeksforgeeks.org/fmt-scanf-function-in-golang-with-examples/

