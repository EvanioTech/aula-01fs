export interface Users {
    id: number;
    name: string;
    age: number;
    exibir?: boolean;
}

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Matias', age: 30, exibir: true }
]
const finduser = users.find((user) => user.id === 2);
const finduser2 = users.find((user) => user.id === 5);
console.log(finduser);
console.log(finduser2);