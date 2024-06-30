package main

import (
	"fmt"
)

var p int    // secret
var q int    // secret
var n int    // public
var phiN int // secret

var e int    // public
var d int    // secret

func setN() {
	fmt.Println("Enter two primes")

	fmt.Print("p = ")
	fmt.Scanf("%d\n", &p)
	fmt.Print("q = ")
	fmt.Scanf("%d\n", &q)

	n = p * q
	fmt.Println("n =", n)

	phiN = (p-1) * (q-1)
	fmt.Println("phiN =", phiN)
}

type EEAResult struct {
	gcd, s, t int
}

func EEA(a int, b int) EEAResult {
	r0 := a
	r1 := b
	s0 := 1
	s1 := 0
	t0 := 0
	t1 := 1
	
	for r1 > 0 {
		q = (r0 - r0 % r1) / r1
		r0, r1 = r1, r0 - r1 * q
		s0, s1 = s1, s0 - s1 * q
		t0, t1 = t1, t0 - t1 * q
	}
	
	return EEAResult {
		gcd: r0,
		s: s0,
		t: t0,
	}
}

func getDE() {
	fmt.Println("phiN =", phiN)
	fmt.Println("Enter a coprime `e`")

	var res EEAResult

	for {
		fmt.Print("e = ")
		fmt.Scanf("%d\n", &e)
	
		res = EEA(phiN, e)

		if res.gcd == 1 {
			break
		} else {
			fmt.Println("Not a coprime!")
		}
	}

	d = res.t
	for d < 0 {
		d += phiN
	}
	fmt.Println("d =", d)

	check :=  d * e % phiN
	fmt.Println("d * e % phiN =", check)
}

func modPower(n int, p int, m int) int {
	if p == 0 {return 1}
	if p == 1 {return n}

	x := modPower(n, p / 2, m)
	if p % 2 == 0 {
		return (x * x) % m
	} else {
		return (x * x * n) % m
	}
}

func encrypt() {
	var msg int

	fmt.Printf("Enter a number to encrypt (msg < %d)\n", phiN)
	fmt.Print("msg = ")
	fmt.Scanf("%d\n", &msg)

	fmt.Printf("Encrypting using e(%d) & n(%d)...\n", e, n)
	enc := modPower(msg, e, n)

	fmt.Println("enc =", enc)
}

func decrypt() {
	var enc int

	fmt.Println("Enter a number to decrypt")
	fmt.Print("enc = ")
	fmt.Scanf("%d\n", &enc)

	fmt.Printf("Encrypting using *d*(%d) & n(%d)...\n", d, n)
	msg := modPower(enc, d, n)

	fmt.Println("msg =", msg)
}

func main() {
	fmt.Println("modPower(2, 10, 300) =", modPower(2, 10, 300))

	// fmap := map[int]func(){
	// 	1: setN,
	// 	2: getDE,
	// 	3: encrypt,
	// 	4: decrypt,
	// }

	var option int
	for {
		fmt.Println("====================================")
		fmt.Println("Select Option")
		fmt.Println("1. Set N\t2. Get d & e")
		fmt.Println("3. Encrpyt\t4. Decrypt")
		fmt.Println("====================================")
		fmt.Scanf("%d\n", &option)

		switch option {
		case 1: 
			setN()
		case 2: 
			getDE()
		case 3: 
			encrypt()
		case 4: 
			decrypt()
		}
		// fmap[option]();
	}
}
