// Swap to Variable by using 3 variables

let a=20;
let b=10;
let temp;
temp=a;
a=b;
b=temp;
console.log(`Value of a= ${a} and Value of b=${b} via using 1st Method`);


let c=20;
let d=10;

c=c+d;//30
d=c-d//20
c=c-d//10

console.log(`Value of c= ${c} and Value of d=${d} via using 2nd Method`);


let e=20;
let f=10;

[e,f]=[f,e]

console.log(`Value of e= ${e} and Value of f=${f} via using 3rd Method`);
