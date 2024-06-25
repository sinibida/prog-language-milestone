package main

import (
	"fmt"
	"time"
) // Multiple import statement

// https://gobyexample.com/switch
// MY GOD IT'S SO COMPLEX

func main() {
	i := 2
	switch i {
	case 1:
		fmt.Println("one")
	case 2:
		fmt.Println("two")
	case 3:
		fmt.Println("three")
	}
	// Basic Switch
	// + `break` not needed

	fmt.Println("---")

	weekday := time.Now().Weekday()
	fmt.Println("Weekday is:", weekday)
	switch weekday {
	case time.Saturday, time.Sunday: // Multiple Case
		fmt.Println("It is a weekend")
	default:
		fmt.Println("It is a weekday")
	}
	// `time` module

	fmt.Println("---")

	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Before Noon")
	default:
		fmt.Println("After Noon")
	}
	// switch as if-else

	fmt.Println("---")
	// vvv ??? vvv

	// switch h := t.Hour() {     // ERROR
	// switch typ := t.Hour().(type) { // Still Error
	//   Reason: `t.Hour()` is not an interface

	// wha??

	whatAmI := func(i interface{}) {
		switch t := i.(type) {
        case bool:
            fmt.Println("I'm a bool")
        case int:
            fmt.Println("I'm an int")
        default:
            fmt.Printf("Don't know type %T\n", t)
		}
	}
	// Lambda
	// Type Checking
	
	whatAmI(1)
	whatAmI("Hello")
	whatAmI(true)
	
	fmt.Println("---")

	add3 := func(x int) int {
		return (x + 3)
	} // Cool

	fmt.Println(add3(5))
}
