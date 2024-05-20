let x,y,z;

[x=9, y=0, z=6] = [90];

console.log(x);
console.log(y);
console.log(z);

// With objects
({x=9, y=0, z=6} = {x:90});

console.log(x);
console.log(y);
console.log(z);

