const args = process.argv.slice(2);
const readFN = require('./read');
const createFN = require('./create');
const deleteFN = require('./delete');
const { stringify } = require('querystring');
const update = require('./update');
const operation = args[0];
const newProduct = args[1];
const updateProduct = args[2];


// console.log("new prod: " , newProduct);

const allowed = ['create', 'read', 'update', 'delete'];

if (!allowed.includes(operation)) {
    throw new Error(`operation ${operation} is not a legal operation in our schoole!`)
}

switch (operation) {
    case "read": console.log(readFN());
        break;

    case "create":
        createFN(JSON.parse(newProduct));;
        // console.log(args[1]);
        break;

    case "delete":
        deleteFN(newProduct);
        console.log('new product in the main flow: ' + newProduct);
        break;

    case "update":
        update(newProduct, JSON.parse(updateProduct));
        break;

    default: console.log("do not work from some resson...")
        break;
}


