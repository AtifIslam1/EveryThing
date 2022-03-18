class Support {
    name;
    designation = 'support web Developer';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start the Session');
    }
};
const aamir = new Support('Amir Khan', 'Bd');
const salman = new Support('Salman Bro', 'Dubai');
aamir.startSession();
salman.startSession();
// console.log(aamir);
// console.log(salman);