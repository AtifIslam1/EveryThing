document.getElementById('login-submit').addEventListener('click', function () {
     // user email taking
     const emailFeild = document.getElementById('user-email');
     const userEmail = emailFeild.value;
     // user password
     const passwordField = document.getElementById('user-password');
     const userPassword = passwordField.value;
     // Check Email And Password
     if (userEmail == 'Sssfa576@gmail.com' && userPassword == 'galaxy') {
          // console.log('Valid User');
          window.location.href = 'banking.html';
     }
     else {
          // console.log('Not a Valid User...... Get Lost');
     }

});

var myName = document.getElementById("name").value;
console.log(myName);