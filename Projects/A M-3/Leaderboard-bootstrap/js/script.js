function colorRed(iD){
     document.getElementById(iD).style.color = 'red'
}
function BackGroundColorBlue(iD){
     document.getElementById(iD).style.backgroundColor = 'green'
}

colorRed('top-header');
colorRed('blog-header');
BackGroundColorBlue('player1')
BackGroundColorBlue('player2')
BackGroundColorBlue('player3')
BackGroundColorBlue('player4')
BackGroundColorBlue('player5')
BackGroundColorBlue('player6')


function updateNumber(numberId, isAdd, button, button2) {
     let input = document.getElementById(numberId);
     let number = input.value;
     if (isAdd == true && number < 5) {
          number = parseInt(number) + 1;
     }
     else if (isAdd == false && number > 0) {
          number = parseInt(number) - 1;
     }
     else if (number == 5){
          document.getElementById(button).style.color = 'gray'
     }
     else if(number == 0){
          document.getElementById(button2).style.color = 'gray'
     }
     input.value = number;
}

document.getElementById('course1-plus').addEventListener('click', function(){
     updateNumber('course1-number', true, 'course1-plus', 'course1-minus');
     
});

document.getElementById('course1-minus').addEventListener('click', function(){
     updateNumber('course1-number', false, 'course1-plus', 'course1-minus');
});
document.getElementById('course2-plus').addEventListener('click', function(){
     updateNumber('course2-number', true, 'course2-plus', 'course2-minus');
});
document.getElementById('course2-minus').addEventListener('click', function(){
     updateNumber('course2-number', false, 'course2-plus', 'course2-minus');
});
document.getElementById('course3-plus').addEventListener('click', function(){
     updateNumber('course3-number', true, 'course3-plus', 'course3-minus');
});
document.getElementById('course3-minus').addEventListener('click', function(){
     updateNumber('course3-number', false, 'course3-plus', 'course3-minus');
});