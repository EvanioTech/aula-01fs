import { Users } from "./aulafind"

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Matias', age: 30, exibir: true }
]

const reducedUsers = users.reduce((accumulator, user) => {
    
    return {
        ...accumulator,
        [user.name]: {
            
            age: user.age,
            
        }
    };
}, [] as Users[]);
const reducedUsers2 = users.reduce((accumulator, user) => {
    if (user.exibir) {
        accumulator.push(user);
    }
    return accumulator;
}
, [] as Users[]);


const chaves = Object.keys(reducedUsers);
console.log(reducedUsers);
console.log(reducedUsers2);
console.log(chaves);


