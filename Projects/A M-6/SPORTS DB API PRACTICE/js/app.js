const field = document.getElementById('search-field');
const results = document.getElementById('search-result')
const names = () => {
    if (field.value == '') {
        const div = document.createElement('div');
        div.innerHTML = `
        <h6 class="text-center text-danger">~Plz Give a name in the search box~</h6>
        `;
        results.appendChild(div);
    }
    else {
        url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${field.value}`
    }
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayers(data.player))
        results.textContent = '';
};

const showPlayers = players => {
    players.forEach(player => {
        if (player.strThumb == null) {
            const div = document.createElement('div');
        div.classList.add('rounded-lg')
        div.classList.add('p-4')
        div.classList.add('shadow-lg')
        div.innerHTML = `
        <img class="w-100 mb-4 rounded" src="image/images.png">
        <h4 class="mb-3">${player.strPlayer}</h4>
        <p><strong>Sport: </strong>${player.strSport}</p>
        <p><strong>Nationality: </strong>${player.strNationality}</p>
        <p><strong>Position: </strong>${player.strPosition}</p>
        <button class="btn btn-primary"onclick="">Details</button>
        `;
        const card = document.createElement('div');
        card.classList.add('p-4')
        card.classList.add('col-lg-4')
        card.appendChild(div)
        results.appendChild(card);
        }
        else {
            const div = document.createElement('div');
        div.classList.add('rounded-lg')
        div.classList.add('p-4')
        div.classList.add('shadow-lg')
        div.innerHTML = `
        <img class="w-100 mb-4 rounded" src="${player.strThumb}">
        <h4 class="mb-3">${player.strPlayer}</h4>
        <p><strong>Sport: </strong>${player.strSport}</p>
        <p><strong>Nationality: </strong>${player.strNationality}</p>
        <p><strong>Position: </strong>${player.strPosition}</p>
        <button class="btn btn-primary"onclick="">Details</button>
        `;
        const card = document.createElement('div');
        card.classList.add('p-4')
        card.classList.add('col-lg-4')
        card.appendChild(div)
        results.appendChild(card);
        }
    })
};