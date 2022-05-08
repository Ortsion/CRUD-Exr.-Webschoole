
// const obj = 
// {
//     apple: { price: 32, code: 544478 },
//     apple2: { price: 322, code: 544478 },
//     apple3: { price: 322, code: 544478 }
//   }

// console.log(obj);
// delete obj.apple;
// console.log(obj);


const obj = {
    'first': 'one',
    'second': 'two',
    'third': 'three'
}

// delete properties 'first' and 'third'

const { first, third, ...exceptBoth } = obj

console.log(exceptBoth)    