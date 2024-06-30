package main;

import (
	"fmt"
)

func plusPlus(a, b, c int) int {
	return a + b + c;
}

func swap(a, b int) (int, int) {
	return b, a
}

func sum(nums ...int) int {
	sum := 0
	for _, val := range nums {
		sum += val
	}
	return sum
}

func main() {
	fmt.Println("plusPlus(1, 2, 3) =", plusPlus(1, 2, 3))

	// fmt.Println("swap(10, 99) =", swap(10, 99))
	// ^^^ ERROR: multiple value return != tuples
	a, b := swap(10, 99)
	fmt.Println("a =", a)
	fmt.Println("b =", b)

	// *Variadic* function
	fmt.Println("sum(1,2,3,4,5) =", sum(1,2,3,4,5))
	s := []int{6,7,8,9,10}
	fmt.Println("sum(s...) =", sum(s...))
}
