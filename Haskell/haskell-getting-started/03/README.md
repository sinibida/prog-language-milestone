# Keywords

- Command
  - `:instances`
  - `:ma(in)`
  - `:t`
- Words
  - type & **typeclass**
- Preludes
  - show & read :: Read a => String -> a
  - *Typeclasses*
    - Enum (for `[1,2..5]`)
    - Bounded
      - -> maxBound & minBound
    - Num & Integral & Floating

# What?

Num type

```
ghci> :t 20          
20 :: Num a => a -- !!!
```

# Explicit Type

`read "5" :: Int`

# Typeclasses

```
ghci> :instances Int
instance Bounded Int -- Defined in ‘GHC.Enum’
instance Enum Int -- Defined in ‘GHC.Enum’
instance Integral Int -- Defined in ‘GHC.Real’
instance Num Int -- Defined in ‘GHC.Num’
instance Real Int -- Defined in ‘GHC.Real’
instance Read Int -- Defined in ‘GHC.Read’
instance Show Int -- Defined in ‘GHC.Show’
instance Eq Int -- Defined in ‘GHC.Classes’
instance Ord Int -- Defined in ‘GHC.Classes’
```
