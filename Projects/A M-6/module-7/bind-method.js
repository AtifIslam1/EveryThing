const student = {
    id: 101,
    money: 2000,
    name: 'Atif',
    treatDe: function(expenses){
        this.money = this.money - expenses;
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
student.treatDe(500);
const heroTreat = student.treatDe.bind(heroBalam);
const normalTreat = student.treatDe.bind(normalGolam);
student.treatDe(500);
heroTreat(400)
heroTreat(400)
normalTreat(400)
normalTreat(400)
student.treatDe(500);
heroTreat(400)
heroTreat(400)
student.treatDe(400);
normalTreat(4000)
