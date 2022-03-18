function add(num1, num2 = 0){     
     
     // other Option 1
     
     // if(num2 == undefined){
     //      num2 = 0;
     // }

     
     // other Option 2
     
     // num2 = num2 || 0;

     const total = num1 + num2;
     return total;
}

const result = add(15);
console.log(result);