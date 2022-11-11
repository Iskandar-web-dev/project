let car = {
    mark: prompt('car mark'),
    color: prompt('color'),
    engine: prompt('engine force'),
    year: prompt('year'),
    hasHatch: confirm('hatch'),
    isBox: confirm('automat or mechanic'),
    price: prompt('price')
}


let cars = [
    {
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        mark: "skoda",
        color: "green",
        engine: "1.8",
        year: 2019,
        hasHatch: false,
        isBox: true,
        price: 30000,
        img: "https://a.d-cd.net/dEAAAgHAnuA-960.jpg"
    },

    {
        mark: "Daewoo",
        color: "green",
        engine: "0.8",
        year: 2000,
        hasHatch: false,
        isBox: false,
        price: 3500,
        img: "https://img.zr.ru/_ah/img/4JLvvYfr6gcI33uH0STwLA=s800"
    },

    {
        mark: "Mersedes",
        color: "black",
        engine: "S63",
        year: 2017 ,
        hasHatch: true,
        isBox: true,
        price: 80000 ,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/800px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg"
    },
    {
    mark: "malibu 2",
    color: "black",
    engine: "Facelift 1.5 LT",
    year: 2019,
    hasHatch: true,
    isBox: true,
    price: 24900,
    img: "https://car24.uz/wp-content/uploads/2019/11/photo5238192627768210177.jpg"
    },
    {
    mark: "toyota",
    color: "white",
    engine: "v8",
    year: 2021,
    hasHatch: true,
    isBox: true,
    price: 60000,
    img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
    mark: "spark",
    color: "green",
    engine: "M300",
    year: 2018,
    hasHatch: false,
    isBox: true,
    price: 10050,
    img: "https://quto.ru/service-imgs/4c/03/ca/a7/4c03caa704002.jpeg"
    },
    {
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        mark: "tico",
        color: "black",
        engine: "suzuki alto",
        year: 1988,
        hasHatch: false,
        isBox: false,
        price: 10000,
        img: "https://s.auto.drom.ru/i24198/c/photos/generations/500x_daewoo_tico_g5931.jpg?559589"
    },
    {
        mark: "matiz",
        color: "yellow",
        engine: "daewoo f8CV",
        year: 2005,
        hasHatch: false,
        isBox: false,
        price: 15000,
        img: "https://autoreview.ru/images/Article/1649/Article_164980_860_575.jpg"
    },
    {
        mark: "lamborgini",
        color: "orange",
        engine: "v12",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 200000,
        img: "https://i.playground.ru/i/pix/2543123/image.jpg"
    },
    {
        mark: "bmw",
        color: "blue",
        engine: "V10-cylinder engine",
        year: 2014,
        hasHatch: false,
        isBox: true,
        price: 80000,
        img: "https://1gai.ru/uploads/posts/2013-12/1386967351_new-bmw-m3-sedan-192.jpg"
    },
    {
        mark: "lotus",
        color: "red",
        engine: "2ZZ-GE",
        year: 2018,
        hasHatch: false,
        isBox: true,
        price: 100000,
        img: "https://wroom.ru/i2/carpic/10044.jpg"
    },
    {
        mark: "bmw",
        color: "white",
        engine: "1.5",
        year: 2014,
        hasHatch: true,
        isBox: true,
        price: 180000,
        img: 'https://kolesa-uploads.ru/-/24165599-a9d1-4e6d-aeab-6b873972da6c/bmw-i8-1.jpg'
    },
    {
        mark: "camry",
        color: "black",
        engine: "V6",
        year: 2017,
        hasHatch: true,
        isBox: false,
        price: 35000,
        img: 'https://a.d-cd.net/f05f5bes-960.jpg'
    },
    {
        mark: "tesla",
        color: "white",
        engine: "electro",
        year: 2020,
        hasHatch: true,
        isBox: true,
        price: 170000,
        img: 'https://cdna.artstation.com/p/assets/covers/images/014/856/578/large/alberto-luque-c-13-8k-pequena.jpg?1545931509'
    },
    {
        mark: "Mercedes",
        color: "sky-blue",
        engine: "v10",
        year: 2020,
        hasHatch: false,
        isBox: true,
        price: 107000,
        img: "https://s.auto.drom.ru/i24219/c/photos/generations/500x_mercedes-benz_amg_gt_g8242.jpg?796841"
    },
    {
        mark: "Audi",
        color: "grey",
        engine: "v8",
        year: 2019,
        hasHatch: false,
        isBox: true,
        price: 69000,
        img: "https://s.auto.drom.ru/img4/catalog/photos/generations/500x_audi_r8_g1265.jpg?109709"
    },
    {
        mark: "Nissan",
        color: "black",
        engine: "v100",
        year: 2020,
        hasHatch: false,
        isBox: true,
        price: 156000,
        img: "https://s.auto.drom.ru/i24196/c/photos/generations/500x_nissan_gt-r_g4800.jpg?495634"
    },

]
let filtered = cars.filter(item => {
    if(item.mark === item.mark){
        return item
    }
})
console.log(filtered);


