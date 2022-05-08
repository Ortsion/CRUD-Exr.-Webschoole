const fs = require('fs');
const readFN = require('./read');

const create = (product) => {
   const cart = readFN();
   // console.log("cart in the create func: ", cart)
   const newCart = Object.assign({}, cart, product)
   //  {
   //    ...cart,
   //    ...product,
   // }
   fs.writeFileSync('./data/cart.json', JSON.stringify(newCart))
}


module.exports = create;

