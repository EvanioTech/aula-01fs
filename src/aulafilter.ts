const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    {id:4, name: 'Matias', age: 30, exibir: true}
]

const filteredUsers = users.filter((user) => user.age > 30);
const vdd = users.filter((user) => user.age > 30).map((user) => {
    return {
        id: user.id,
        name: user.name,
        age: user.age,
        exibir: user.exibir
    };
});
console.log(filteredUsers);
console.log(vdd);
