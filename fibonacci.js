/*
Numbers are fun! Write a generator 
function fibonacciGenerator(limit) that 
yields Fibonacci numbers up to a specified 
limit. Remember, the first two Fibonacci 
numbers are 0 and 1, and each subsequent 
number is the sum of the previous two.

*/

function * fibonacciGenerator(limit){
    let arr = [0, 1];
    yield arr[0];
    yield arr[1];

    for(let i = 1; i<=limit-2; i++){
        arr.push(arr[i] + arr[i-1]);
        yield arr[i] + arr[i-1];
    }
}

const ourFibs = fibonacciGenerator(10);

for(const myFib of ourFibs){
    console.log(myFib);
}

// function* fibonacciGenerator(limit){
//     let arr=[0,1]
//     yield arr[0];
//     yield arr[1];

//     for(let i=1;i<=limit-2;i++){
//         arr.push(arr[i]+arr[i-1])
//         yield arr[i]+arr[i-1];
        
//     }
// }

let one=fibonacciGenerator(10);

for(let i of one){
    console.log(i)
}