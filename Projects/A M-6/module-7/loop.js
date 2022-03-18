const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for (let i = 0; i < 10; i++){

};

for (const num of numbers){

}; --> for array like 
for (const prop in student){    

}; --> for Object
*/

for (const prop in bottle) {
    // console.log(prop, ': ', bottle[prop]);
};

const entries = Object.entries(bottle);
// console.log();
// const [keys, value] = ['color', 'yellow'];
for (const [keys, value] of entries) {
    console.log(keys, value);
}