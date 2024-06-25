package main

import "fmt"

func main() {
	fmt.Println("Hello World");

	fmt.Println("======================")

	fmt.Println("Go" + "Lang")
	// Semicolon Not Mandatory

	fmt.Println("7.0/3 = ", 7.0/3)
	fmt.Println("7/3.0 = ", 7/3.0)
	fmt.Println("7/3 = ", 7/3)
	// Println concats like python

	fmt.Println("======================")

	var a = "Hello"
	fmt.Println(a)

	var b, c int = 1, 2
	// Tuples, Cool!
	// Cool way to annotate types
	fmt.Println(b, c)

	var int_def int
	fmt.Println(int_def)

	// var just_def
	// ^^^ Compiler error
	var str_def string
	fmt.Println(str_def)

	simple_var := 105
	fmt.Println(simple_var)
	// Shorthand for var? wth???

	fmt.Println("======================")

	const pi = 3.141592
	fmt.Println(pi)
	// pi = 1.412 // ERROR

	
}
