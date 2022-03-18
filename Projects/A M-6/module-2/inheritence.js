class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
};

class Support extends TeamMember {
    designation = 'support web Developer';
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start the Session');
    }
};

class StudentCare extends TeamMember {
    designation = 'Student Care Web Developer';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
};

class NeptuneDeveloper extends TeamMember {
    designation = 'Neptune Developer';
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
};


const aamirK = new Support('Amir Khan', 'Bd');
const salman = new Support('Salman Bro', 'Dubai');
const sharuk = new Support('SRK Bro', 'Dubai');
const Akshay = new Support('Akshay Bro', 'Dubai');

const alia = new StudentCare('Alia', 'Mumbai');
const ash = new NeptuneDeveloper('Ash', 'Tokyo', 'Android Studio');
ash.releaseApp('1.4.5')
// console.log(ash);