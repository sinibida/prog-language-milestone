package main

import "fmt"

func main() {
	i := 5
	for i > 0 {
		fmt.Println(i)
		i -= 1
	}

	fmt.Println("---")

	for j := 0; j < 5; j++ {
		fmt.Println(j)
	}

	fmt.Println("---")

	for i := range 3 {
		fmt.Print(i, " ")
	}
	// <- 0 1 2
	// Range expression, COol!
	fmt.Println()

	fmt.Println("---")

	k := 1
	for { // INFINITE LOOP (So Short!)
		k++

		if k % 2 == 1 {
			continue
		}

		fmt.Println(k, "is even")

		if k > 15 {
			break
		}
	}

	fmt.Println("======================")

	if num := 8; num < 10 {
		fmt.Println(num, "is lesser than 10");
	} else {
		fmt.Println(num, "is or is greater than 10");
	}
	// num // <-- UNDEFINED!

	// Declaration inside (and only inside) if
	// + Can be used in else also.
}
