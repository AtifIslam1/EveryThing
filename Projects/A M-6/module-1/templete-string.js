const priya = 'Asif Akbar';
const meye = "Meye Tumi ki dukkho chino";
const kobita = `kobita tumi shopno charini`;

const lines = `
first line
second line
third line
`;

const friends = ['abul', 'babul', 'kabul', 'sabul'];


const count = 5;
const old = '<h3 class="friend-name">Friend-</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;

const first = 'mamun';
const last = 'hossain';
const fullName = `This person's name is: ${first} ${last}. Has money ${(friends.length * 100) * 500}. He lives in Dhaka.`;
console.log(fullName);