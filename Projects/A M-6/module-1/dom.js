document.getElementById('add-border').addEventListener('click', function () {
     const container = document.getElementById('friend-container');
     container.style.border = '3px solid red';
     container.style.padding = '15px';
});

function addBackgroundColor() {
     const friends = document.getElementsByClassName('friend');
     for (const friend of friends) {
          friend.style.background = 'skyblue';
          friend.style.padding = '0px 30px';
     };
}
function addFriend() {
     const container = document.getElementById('friend-container');
     const friendDiv = document.createElement('div');
     friendDiv.classList.add('friend');
     friendDiv.innerHTML = `
     <div class="friend">
          <h3 class="friend-name">New Friend</h3>
          <p>Ad, adhads?</p>
     </div>
     `;
     container.appendChild(friendDiv);
}