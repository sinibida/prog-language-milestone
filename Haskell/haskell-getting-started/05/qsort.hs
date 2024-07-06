qsort :: (Ord a) => [a] -> [a]
qsort [] = []
qsort [x] = [x]
qsort (x:xs) = left ++ [x] ++ right
  where
    left = qsort [y|y <- xs, y < x]
    right = qsort [y|y <- xs, y > x]
