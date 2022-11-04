let cars = [4000, 27000, 16000, 10000, 11000, 17000, 50000, 70000, 60000, 35000, 300, 2000, 8000]
let cheap = []


cars.filter(price => {
    if (price <= 35000 === true) {
        cheap.push(price)
    }
})
console.log(cheap);

//2
let arr = [4, 1, 2, 5, 4, 46, 11, 9, 27, 8, 33, 0, 9]
let even = []
let odd = []


arr.filter(num => {
    if (num % 2 === 0 === true) {
        even.push(num)
    }
})
console.log(even);

arr.filter(num => {
    if (num % 2 === 1 === true) {
        odd.push(num)
    }
})
console.log(odd);

//3
let students = ['Azamat', 'Naufal', 'Parviz', 'Amin', 'Samir', 'Daler', 'Kamron']
let name = prompt('any name')

console.log(
    alert(students.filter(name2 => name2 !== name))
);