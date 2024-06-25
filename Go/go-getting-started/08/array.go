package main

import (
	"fmt"
)

func main() {
	//
	// ARRAY
	//

	var a [10]int
	fmt.Println("a:\t", a)

	a[4] = 42
	fmt.Println("a[4]:\t", a[4])

	fmt.Println("len(a):\t", len(a))

	b := [5]int {5, 4, 3, 2, 1}
	fmt.Println("b:\t", b)
	// Array init

	// b = [...]int {9, 8, 7, 6} // ERROR: Array size diff
	b = [...]int {9, 8, 7, 6, 5}
	fmt.Println("b:\t", b)

	
	b = [...]int {9, 3: 100, 200}
	fmt.Println("b:\t", b)

	twoD := [2][3]int{
        {1, 2, 3},
        {1, 2, 3},
    }
    fmt.Println("twoD:\t", twoD)

	fmt.Println("======================")

	//
	// SLICE
	// 

	// > Slices are an important data type in Go, 
	// > giving a more powerful interface
	// > to sequences than arrays.

	var s []string
	fmt.Println("s:\t", s)
	fmt.Println("s == nil:\t", s == nil) // `nil`
	fmt.Println("len(s):\t", len(s))

	fmt.Println("---")

	s = make([]string, 3)
	fmt.Println("s:\t", s)
	fmt.Println("len(s):\t", len(s))

	fmt.Println("---")

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println("s:\t", s)
}
