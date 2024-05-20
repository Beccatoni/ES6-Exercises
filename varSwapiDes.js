let a = 5;
let b = 10;

console.log("Before swapp:");
console.log("a:", a);
console.log("b:", b);

([a, b]= [b, a]);

console.log("After swapp:");
console.log("a:", a);
console.log("b:", b);
