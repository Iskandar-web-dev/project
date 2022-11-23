let products = [
    {
        name: 'milk',
        type: 'milk',
        price: 10000
    },
    {
        name: 'apple',
        type: 'fruit',
        price: 6000
    },
    {
        name: 'vodka',
        type: 'alcohol',
        price: 70000
    },
    {
        name: 'tvorog',
        type: 'milk',
        price: 15000
    },
    {
        name: 'banan',
        type: 'fruit',
        price: 25000
    },
    {
        name: 'pivo',
        type: 'alcohol',
        price: 50000
    },
    {
        name: 'cheese',
        type: 'milk',
        price: 40000
    },
    {
        name: 'persik',
        type: 'fruit',
        price: 23000
    },
    {
        name: 'mochito',
        type: 'alcohol',
        price: 120000
    },
]
//1
let totalPrice = 0
for(let i of products) {
    totalPrice += i.price 
    
}
console.log(obsh);
//3
let max = products.reduce((a,b) => a.price > b.price ?a : b )
let min = products.reduce((a,b) => b.price < b.price ?a : b )

console.log(max , min);
// Найти общ сумму
// Найти среднюю цену 
// найти самый дорогой продукт
// найти самый дешевый продукт



