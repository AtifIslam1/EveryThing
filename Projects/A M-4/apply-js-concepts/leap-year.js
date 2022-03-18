function isLeapYear(Year) {
     if (Year % 4 == 0) {
          return true;
     }
     else {
          return false;
     }
}
const myYear = 2008;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Leap year =', isMyYearLeapYear);