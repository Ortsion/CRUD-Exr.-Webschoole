const fs = require('fs');
const readFN = require('./read');

const deleteFN = (product) => {

    const cart = readFN();
   let filtered = {};
   Object.keys(cart).filter(prop => {
       if (prop !== product) {
           filtered[prop] = cart[prop]
        }
    })
    
    fs.writeFileSync('./data/cart.json', JSON.stringify(filtered))
    }
    
    module.exports = deleteFN;






//    console.log("cart before delete : ", cart);
//    const {product, ...newCart} = cart;
//    const newCart = {...cart};
//    console.log('newCart after delete: ', newCart)


//    fs.writeFileSync('./data/cart.json', JSON.stringify(cart))
























// const readFN = require('./read');


// const deleteFN = (product) => {
//     // // product = newPro;
//     // console.log('product in the delete func: ' + product);
//     const cart =  readFN();
//     console.log('cart before delete: ' + cart);
//     // delete cart.product;
//     // console.log('cart after delete: ' + cart);
//     // fs.writeFileSync(JSON.stringify(cart));
// }