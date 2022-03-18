const student = {
    id: 101,
    money: 2000,
    name: 'Atif',
    treatDe: function(expenses, boksis, tax){
        this.money = this.money - expenses - boksis - tax;
        console.log(this)
        return this.money;
    }
};

const heroBalam = {
    id: 102,
    money: 5000,
    name: 'Hero Balam'
}

const normalGolam = {
    id: 103,
    money: 8000,
    name: 'normal Golam'
}
// call
student.treatDe.call(heroBalam, 500, 40, 50);
student.treatDe.call(heroBalam, 300, 50, 30);

// apply
student.treatDe.apply(heroBalam, [300, 50, 30]);
student.treatDe.apply(heroBalam, [1000, 250, 100]);

student.treatDe.apply(normalGolam, [1000, 250, 100]);
