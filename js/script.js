let discount = 10 //prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = Object

let min = Object

let average = 0

let isFresh = [], isNotFresh = []

let priceArray = []

let array_sale = []

let arr = [

{

name: 'Milk',

price: 3.25,
isfresh:true

},

{

name: 'Coffee',

price: 1.5,
isfresh:true

},

{

name: 'Ice Cream',

price: 7.85,
isfresh:false

},

{

name: 'Tomatos',

price: 4.14,
isfresh:true

},

{

name: 'Onion',

price: 2.25,
isfresh:false
}

]

// 1. Сохранить самый дорогой товар в переменную`max и самый дешевый в min`

// X2. отфильтровать масив на свежие и не свежие продукты

// X3. Сохранить общую цену без скидок в переменную`total`

// X4. Сохранить общую цену со скидкой в переменную`totalSale`

// X5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную array_sale

// X6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок

const setup = (array) => {
    if ( discount > 0 && discount < 100) {
          //task1
    array.forEach(i => {
        priceArray.push(i.price)
        
    })
    max = array.filter(item => item.price >= priceArray.sort((a, b) => a- b)[priceArray.length - 1])
    min = array.filter(item => item.price <= priceArray.sort((a, b) => a- b)[0])
    console.log(max);
    console.log(min);
    //task6 
    average = array.reduce((a, b) => a + b.price, 0)

    //task3
    total = average
    console.log(total);

    //task6
    average = average / array.length
    console.log(average);

    //task2
    isFresh = array.filter(element => element.isfresh == true)
    console.log(isFresh);
    isNotFresh = array.filter(element => element.isfresh == false)
    console.log(isNotFresh);

    //task4
    totalSale = total - total / 100 * discount 
    console.log(totalSale);
    
    //task5 
    array_sale = array.slice(0, array.length - 1)
    array_sale.forEach(item => {
        item.price = item.price - item.price / 100 * discount 
    })
    console.log(array_sale);
    }
    else{
        alert("Not Permitted!")
    }
}

setup(arr)
