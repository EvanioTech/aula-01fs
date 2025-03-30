import { Users } from "./aulafind";


const users = [
    { id: 1, name: 'Alice', age: 25, cards: ['1020', '2030'] },
    { id: 2, name: 'Bob', age: 30, cards: ['9978', '1535'] },
    { id: 3, name: 'Charlie', age: 35, cards: ['9985', '1154'] },
    { id: 4, name: 'Matias', age: 30, cards: ['9933', '1230'] }
]

const flatMapUsers = users.flatMap((user) => {
    return user.cards.map((card) => {
        return {
            name: user.name,
            card: card
        }
    });
});
const flatMapUsers2 = users.flatMap((user) => {
    return user.cards.map((card) => {
        return {
            name: user.name,
            card: card
        }
    });
}
);

console.log(flatMapUsers);
console.log(flatMapUsers2);