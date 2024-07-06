# Keywords

- @-pattern
- gaurds
- inline gaurd
- multiple where
- case .. of .. -> ..

# Function Grammars

*@-pattern*

```hs
f :: [a] -> [a]
f arr@[a,b] = arr ++ [a] ++ [b]
```

*gaurds*

```hs
g :: (Ord a, Num a) => a -> String
g x
  | x < 100 = "Under 100"
  | x < 150 = "Under 150"
  | otherwise = "Over or Is 150"
```

*inline gaurd*

```hs
max' :: Ord a => a -> a -> a
max' x y | x > y = x | otherwise = y
```

*multiple where*

```hs
bmiTell :: (RealFloat a) => a -> a -> String
bmiTell weight height
    | bmi <= skinny = "You're underweight!"
    | bmi <= normal = "You're supposedly normal."
    | bmi <= fat    = "You're fat!"
    | otherwise     = "You're a whale!"
    where bmi = weight / height ^ 2
          (skinny, normal, fat) = (18.5, 25.0, 30.0)
```

*let .. in ...*

```hs
h :: Num a => a -> a
h x = let y = x + 1 in y * y

-- as Expression
hh :: Num a => a -> a
hh x = 5 + (let y = x + 1 in y * x)

-- Multiple Binding & Functions
hhh :: Integer
hhh = (let f x = x * x; y = 5 in f y) * 6
-- => 150
```

*case .. of .. -> ..*

```hs
ff :: [a] -> [Char]
ff x = "Type of x is " ++ case x of [] -> "Empty List"
                                    [x] -> "Single List"
                                    x -> "Whatev..."
```
