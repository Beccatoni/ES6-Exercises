function * myGenerator(){
    yield 1;
    yield ;
    yield 2;
    yield 4
}

const gen = myGenerator();

for (const value of gen){
    console.log(value);
}