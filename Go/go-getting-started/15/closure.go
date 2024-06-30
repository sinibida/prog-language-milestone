package main;

import (
	"fmt"
)

func getIntSeq() func() int {
	i := 0
	return func() int {
		i++;
		return i;
	}
}

func main() {
	seq1 := getIntSeq();
	seq2 := getIntSeq();

	fmt.Println("seq1()",seq1())
	fmt.Println()
	fmt.Println("seq2()",seq2())
	fmt.Println()
	fmt.Println("seq1()",seq1())
	fmt.Println()
	fmt.Println("seq2()",seq2())
	fmt.Println("seq2()",seq2())
	fmt.Println("seq2()",seq2())
	fmt.Println()
	fmt.Println("seq1()",seq1())
	fmt.Println("seq1()",seq1())
}
