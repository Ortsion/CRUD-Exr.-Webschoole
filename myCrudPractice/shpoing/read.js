const fs = require("fs");

const read = () =>{
    const cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf-8'));
    // console.log(`cart is : ${cart}`);
    return cart
}
module.exports = read;
