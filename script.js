const user = {
    name: 'Iskandar',
    surname: 'Xasanov',
    age: 22,
    status: true,
    visa: ['Canada', 'USA', 'South Korea'],
    fullname: function() {
        return this.name + ' ' + this.surname
    }
}

let passport =  {
    serries: "AC",
    number: 1231546444,
    date: {
        get: "2015",
        to: "2025"
    }
}
let ob =  Object.assign({}, user, passport);
let keys = Object.keys(ob)
let values = Object.values(ob)
let arr =  keys.concat(values)
console.log(ob, keys, values, arr);

let type = {
    bol: [arr.filter(e => typeof e === 'boolean') ],
    number: [arr.filter(e => typeof e === 'number') ],
    str: [arr.filter(e => typeof e === 'string') ],
    object: [arr.filter(e => typeof e === 'object') ]
}
  console.log(type);



// ТЗ
// Соеденить два объекта в один 
// получить все ключи в один массив и все значения тоже в один отдельный массив
// соеденить два массива в один
// отфильтровать массив по типам данных элементов
