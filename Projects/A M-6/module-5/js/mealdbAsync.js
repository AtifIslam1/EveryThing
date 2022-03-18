const searchBtn = document.getElementById('button-search');
const mealDetails = document.getElementById('meal-details');
mealDetails.style.display = 'none';
const searchResult = document.getElementById('search-result');

const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear search field
    searchField.value = '';
    if (searchField == '') {
        const div = document.createElement('div');
        div.classList.add('text-center');
        div.innerHTML = `
        <h2 class = "text-danger">please give a name of the food you want!~ </h2>
        `;
        searchResult.appendChild(div);
    }
    else {
        // Load Data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals);
        
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResult(data.meals));
    }
};

const displaySearchResult = meals => {
    mealDetails.style.display = 'none';
    searchResult.textContent = '';
    if (meals.length == 0) {
        const div = document.createElement('div');
        div.classList.add('text-center');
        div.innerHTML = `
        <h2 class = "text-danger">No meals matched your search Sorry!~ </h2>
        `;
        searchResult.appendChild(div);
    }
    else {
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
                </div>
            </div>`;
            searchResult.appendChild(div);
        })
    }
};


const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    // console.log(meal);
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img class="card-img-top" src="${meal.strMealThumb}" alt="">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}.</p>
                <a href="${meal.strYoutube}" class="btn btn-primary"> go somehwere</a>
            </div>
    `;
    mealDetails.appendChild(div);
    mealDetails.style.display = 'block';
};



