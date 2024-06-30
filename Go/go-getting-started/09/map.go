package main

import (
	"fmt"
)

func main() {
	mm := map[string]int {
		"ok": 2000,
		"redirection": 3000,
		"client error": 4000,
	}
	fmt.Println("mm =", mm); // No Order

	m := make(map[string]int) // map/slice => make!!

	m["banana"] = 18;
	m["watermelon"] = 25;

	fmt.Println("m =", m);

	keys := []string {
		"banana",
		"watermelon",
		"strawberry",
	}
	for _, key := range keys {
		_, prs := m[key]
		fmt.Println("prs =", prs);
	}
}
