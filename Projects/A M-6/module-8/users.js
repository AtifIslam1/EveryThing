const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]));
};

loadSingleUser();

const displaySingleUser = user => {
    console.log('ok');
};

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const togglesearchResults = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    toggleSpinner('block');
    togglesearchResults('none');
    loadMeals(searchText);  
    document.getElementById('search-field').value = '';
}

const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
    
    const displayMeals = meals => {
        const container = document.getElementById('meals');
        container.textContent = '';
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div');
            div.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <button onclick="loadMealDetails('${meal.strMeal}')">Click</button>
                <img width="150px" src="${meal.strMealThumb}">
            `;
            container.appendChild(div);
        });
        toggleSpinner('none');
        togglesearchResults('block');
    }
}

loadMeals('fish');


const loadMealDetails = mealName => {
    console.log(mealName);
}