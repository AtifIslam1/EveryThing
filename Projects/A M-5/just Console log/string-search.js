const products = [
     'Dell hardcore i29 200Gb Laptop',
     'iphone 1tb camera flashlight phone',
     'Dell yellow laptop with black camera',
     'ix59 Lenovo commercial yoga laptop',
     'LG super nova Laptop',
     'HTC Low Price phone ',
     'Dell Purple Color Phone With Laptop'
];

const searching = 'Dell';

// Indexof


const output = [];
// for (const product of products) {
//      if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//           output.push(product);
//      }
// }

// console.log(output);


// for (const product of products) {
//      if (product.toLowerCase().includes(searching.toLowerCase())) {
//           output.push(product);
//      }
// }
// console.log(output);


// starts with

for (const product of products) {
     if (product.toLowerCase().startsWith(searching.toLowerCase())) {
          output.push(product);
     }
};

console.log(output);