# Keywords

- Function
  - zipWith
  - map :: (a -> b) -> [a] -> [b] ; filter (...)
  - (!!)
  - foldl :: (a -> b -> a) -> a -> [b] -> a
    - foldr :: (*b -> a* -> a) -> a -> [b] -> a
  - foldl1 foldr1
  - scanl :: (a -> b -> a) -> a -> [b] -> *[a]*
  - scanr, scanl1, scanr1

# Currying

*infix curry*

```hs
divByTen :: (Floating a) => a -> a
divByTen = (/10)

divTen :: (Floating a) => a -> a
divTen = (10/)

isUppercase :: Char -> Bool
isUppercase = (`elem` ['A'..'Z'])
```

# Weird Maps

```hs
ghci> maximum $ map (length.chain) [1,2..10]
20

ghci> (map (*) [1..100]) !! 3 $ 5
20
```

# Weird Scans

```hs
ghci> scanr (:) [] [1,2,3]
[[1,2,3],[2,3],[3],[]]

ghci> scanl (flip (:)) [] [1,2,3]
[[],[1],[2,1],[3,2,1]]
```

# Weird Composition

```hs
oddSquareSum :: Integer
oddSquareSum = sum . takeWhile (< 10000) . filter odd . map (^ 2) $ [1 ..]
-- oddSquareSum = sum (  takeWhile (< 10000) (filter odd  (  map (^ 2) $ [1 ..]  ))  )
```


