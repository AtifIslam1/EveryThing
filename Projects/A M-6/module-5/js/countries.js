const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => DisplayCountries(data));
};
loadCountries();
const DisplayCountries = countries => {
    // for(const country of countries){
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h4>${country.name}</h4>
        <p>Population: ${country.population}</p>
        <img width="160px" src="${country.flag}">
    `;
}