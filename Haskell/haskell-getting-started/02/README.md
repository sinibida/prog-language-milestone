Basics

- `/=` (`!=`)
- `+`: strict type
  - only number + number

- **succ**
- **max*

- *infix call*

```haskell
10 `div` 3
```

if: `else` is *mandatory*

```haskell
doubleSmallNumber x = if x > 100
                        then x
                        else x * 2
```

- **Preludes**
  - Others
    - null :: Any -> Boolean
    - succ
    - max :: Num -> Num -> Num ; min
    - mod :: Int -> Int -> Int
  - Array
    - minimum :: [Ord] -> Ord ; maximum
    - sum :: [Num] -> Num ; product
    - elem :: a -> [a] -> Int (= indexAt)
    - take
    - cycle ; repeat
  - Tuple
    - fst :: (a, b) -> a ; snd
    - zip :: [a] -> [b] -> [(a, b)]