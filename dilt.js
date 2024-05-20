const activeUsers = (arr, age) => {
    let names = [];
    
      for (let obj of arr){
        if(obj.age > age && obj.isActive === true){
       names.push(obj.name);
        }
      }
    
    return names;

}

const users = [
       { id: 1, name: "john", age: 10, isActive: true },
       { id: 2, name: "king", age: 75, isActive: false },
       { id: 3, name: "jasper", age: 20, isActive: true },
       { id: 4, name: "Samy", age: 30, isActive: true },
       { id: 5, name: "Emma", age: 40, isActive: false },
     ];

     console.log(activeUsers(users, 20)); // ["Samy"]