divByTen :: (Floating a) => a -> a
divByTen = (/ 10)

divTen :: (Floating a) => a -> a
divTen = (10 /)

isUppercase :: Char -> Bool
isUppercase = (`elem` ['A' .. 'Z'])

twice :: (a -> a) -> a -> a
twice f x = f (f x)

qsort :: (Ord a) => [a] -> [a]
qsort [] = []
qsort [x] = [x]
qsort (x : xs) = left ++ [x] ++ right
  where
    left = qsort $ filter (< x) xs
    right = qsort $ filter (> x) xs

-- using filter

chain :: (Eq t, Integral t) => t -> [t]
chain 0 = []
chain 1 = [1]
chain x = let x' = next x in x : chain x'
  where
    next x
      | even x = x `div` 2
      | otherwise = x * 3 + 1

oddSquareSum :: Integer
oddSquareSum = sum . takeWhile (< 10000) . filter odd . map (^ 2) $ [1 ..]
