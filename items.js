function sqlJoin(arr1, arr2, key){
    const result = [];

    arr1.forEach(element => {
        arr2.forEach(element2 => {
            if(element[key] === element2[key]){
                result.push({...element, ...element2})
            }
        })
        
    });

    return result;
}


const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];


const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];

const result = sqlJoin(employees, salaries, 'id');

console.log(result);