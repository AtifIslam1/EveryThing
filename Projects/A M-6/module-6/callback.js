function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const names = ['Atif Islam', 'Sazzad Rahman', 'Adnan Ali'];
// const myobj = { name: 'Tahsan', age: 11 };
function greetMorning(name) {
    console.log('Good Morning', name);
}
welcomeMessage('Atif', greetMorning);