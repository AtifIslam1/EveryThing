const names = ['abul', 'babul', 'sabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicates(names) {
     const unique = [];
     for (const element of names) {
          if (unique.indexOf(element) == -1) {
               unique.push(element);
          }
     }
     return unique;
}

const uniqueNames = removeDuplicates(names);
console.log(uniqueNames);