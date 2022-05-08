const fs = require('fs');
const readFN = require('./read');
const createFN = require('./create');
const deleteFN = require('./delete');
const args = process.argv.slice(2);


const updateFN = (productToDelete, updateProduct) => {
     const cart = readFN();
     deleteFN(productToDelete);
     createFN(updateProduct);
     console.log(readFN()); 
    }
    
    module.exports = updateFN;




