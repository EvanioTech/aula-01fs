import { Users } from "./aulafind";

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Matias', age: 30, exibir: true }
]

const resultado = users.some((user) => user.age > 30);
const resultado2 = users.every((user) => user.age > 20);

console.log(resultado);
console.log(resultado2);