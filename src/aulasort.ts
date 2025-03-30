import { Users } from "./aulafind";


const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Matias', age: 30, exibir: true }
]

const sortedUsers = users.sort((a, b) => {
    return a.age - b.age;
});
const sortedUsers2 = users.sort((a, b) => {
    if (a.age < b.age) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
);
const sortedUsers3 = users.sort((a, b) => {
    return a.exibir ? -1 : 1;
}
);
console.log(sortedUsers);
console.log(sortedUsers2);
console.log(sortedUsers3);