let name = "Alex"
let money = 10000
let account = 7777


let name2 = prompt('Как вас зовут')
    if (name2 === name) {
        let account2 = prompt('Номер счёта')
    if (account2 == account) {
        alert(`Вы успешно вошли
Ваш баланс: ${money}$`)
        let giveMoney = prompt('Сколько обналичить?')
    if (giveMoney <= money) {
        alert('Всё отлично')
        alert(`Снято: ${giveMoney}$ 
Осталось: ${money - giveMoney}$ `)            
    } else {
        alert('Недостаточно средств')
        }
    } else {
        alert(' Такого аккаунта нету')
    }
    } else {
        alert("Пользователь не найден, досвидули")
    }

//2
// let name = prompt('Как вас зовут?').toLowerCase() 
//     if (name[0] === 'a') {
//         let age = prompt('Сколько вам лет?')
//     if(age >= 20 && age <= 40) {
//         let money = prompt("Сколько у вас денег?")
//     if(money >= 100) {
//         let peoples = prompt('Сколько вас?')
//     if(peoples <= 10) {
//         alert(`Welcome!
// Баланс: ${money}$
// Количество людей в компании: ${peoples}`)
//     } else {
//     alert(`Вас ${peoples} человек
// вместимость клуба: 10 человек 
// выгоните ${peoples - 10} `)
//     }
//     } else {
//         alert('У вас мало денег :(')
//     }
//     } else if(age <= 20) {
//         alert("Вы слишком молоды")
//     } else if(age >= 40) {
//         alert("Вы слишком стары")
//     }   
//     } else {
//         alert(name + " извините вас нету в списке ")
//     }