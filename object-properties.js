var computer = {
    price: 4564,
    Storage: "500gb",
    processor: 'intel i5'
}

// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;

// set a object porpertie value;
computer.price = 7000;
console.log(computer);
// console.log(computerPrice);



// different way to set value of an object properties
computer.price = 7000;
computer['price'] = 2300;
console.log(computer);
var storageProperty = 'storage';
computer[storageProperty] = '512gb';
computer['Storage'] = '1tb';
console.log(computer);
