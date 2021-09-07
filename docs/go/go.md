# `go`

## 一、data types

1. bool
2. string
3. int
    - int8
    - int16
    - int32
    - int64
4. uint
    - uint8
    - uint16
    - uint32
    - uint64
    - uintptr
5. byte

   > alias for uint8
6. rune
   > alias for int32  
   > represents a Unicode code point
7. float32 float64
8. complex64 complex128

The `int`, `uint`, and `uintptr` types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems.
When you need an integer value you should use `int` unless you have a specific reason to use a sized or unsigned integer
type.

```go
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", z, z)
}
```

Variables declared without an explicit initial value are given their *zero value*.

- 0 for numeric types
- false for the boolean type
- "" (the empty string) for strings.

The expression `T(v)` converts the value `v` to the type `T`.

```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)

i := 42
f := float64(i)
u := uint(f)
```

> Unlike in C, in Go assignment between items of different type requires an explicit conversion.

## 二、声明变量的方法
