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