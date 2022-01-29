// const amount = 12;

// if (amount < 10) {
//     console.log('Small number');
// }

// else{
//     console.log('Large number');
// }

// console.log(`This is my first node application!!!`);
// console.log(__dirname);
// console.log(__filename);


// setInterval(()=> {
//     console.log(`Hacked🐱‍💻`);
// }, 5000);


const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./details');


sayHi(names.lanre);
console.log(data.location);
