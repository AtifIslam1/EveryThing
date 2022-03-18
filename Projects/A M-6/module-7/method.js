const student = {
    id: 101,
    money: 2000,
    name: 'Atif',
    major: 'Mathematics',
    subject: ['english', 'economics', 'calculas'],
    bestFriends: {
        name: 'kuddus',
        major: 'Mathematics',
    },
    takeExam: function(){
        console.log(this.name, 'is taking exam')
    },
    treatDe: function(expenses){
        this.money = this.money - expenses;
        return this.money;
    }
};
// student.takeExam();
const remaining1 = student.treatDe(200);
const remaining2 = student.treatDe(500);
console.log(remaining2);