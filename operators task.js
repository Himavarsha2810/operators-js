//  1. result of 10 + '5'
a = 10;
b = "5";
c = a + b;
console.log(c);

// 2. value of x after x = 10; x+=5

let x = 10;
x = x += 5;
console.log(x);

// 3. result of 10 - null

let a1 = 10;
b = a1 - null;
console.log(b);

// 4. value of x after x =10;x*=2;

let x1 = 10;
x = x *= 2;
console.log(x);

// 5. result of 10/'2'

let h = 10;
let h1 = "2";
i = h / h1;
console.log(i);

// 6. result of 10 % 3 - (remainder - 1)

let v = 10;
let v1 = 3;
r = v % v1;
console.log(r);

// 7. value of x after x=10; x=x**2;

let x5 = 10;
x = x5 ** 2;
console.log(x);

// 8. result of 10 > 5 && 5 < 10

let s = 10;
let r1 = 5;
p = s > r && r < s;
console.log(p);

// 9. result of 10 === '10'

let z = 10;
let z1 = "10";
z = z === z1;
console.log(z);

// 10. result of null ?? 'default'

let t = "null";
let t1 = "default";
console.log(t ?? t1);

// 11. result of 10 || 'default'
let d = 10;
d1 = d || "default";
console.log(d1);

// 12. result of !true

u = !true;
console.log(u);

// 13. result of 10 & 5 (10-1010 and 5-0101 - 0(0000))
let n1 = 10;
let n2 = 5;
n3 = n1 & n2;
console.log(n3);

// 14.result of 10 | 5 (10-1010 and 5-0101 - 15(1111))
let o = 10;
let o1 = 5;
o2 = o | o1;
console.log(o2);

// 15.result of 10^5

console.log(10 ^ 5);

// 1. result of x=10;y=++x and  values of x and y   (x=10 and y=11)

let x10 = 10;
let y10 = (y = ++x10);
console.log(y10);

// 2. result of =10; y = x ++ and values of x and y  (x=11 and y =10 )

let x11 = 10;
let y11 = (y = x11++);
console.log(y11);

// 3. result of x=10; console.log(++x)

let x3 = 10;
console.log(++x3);

// 4. result  of x=10; console.log(x++)

let x4 = 10;
console.log(x4++);
console.log(x4);

// 5. result of x=10;y=--x ; and values of x and y  (x=9 and y=9)

x0 = 10;
y0 = --x0;
console.log(y0);
console.log(x0);

// 6. result of x=10;y=x--; and values of x and y (x=9 and y=10)

x6 = 10;
y6 = x6--;
console.log(y6);
console.log(x6);

// ternary operators
// 1. result of x=10;y=x > 5 ? 'yes' : 'no' (x =10 and y=yes )

let m1 = 10;
let m2 = 5;
console.log((m2 = m1 > 5 ? "yes" : "no"));
//  console.log(m2)

// 3. result of x=10;y=x>5?'yes':x > 3?'maybe':'no' (x=10 and y = yes)

console.log((m2 = m1 > 5 ? "yes" : m1 > 3 ? "maybe" : no));

//  optional chaining - 1 
 const obj ={a: {b: 'c' } };
 console.log("1. obj?.a?.b =", obj?.a?.b);

 const obj1 = { a: {b: "c"} };
 console.log("2. obj1?.a?.c =", obj1?.a?.c);

 const obj2 = {a: {b: "c"} };
 console.log("3. obj?.b?.c =", obj2?.b?.c);