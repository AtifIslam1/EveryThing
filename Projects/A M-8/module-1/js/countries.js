const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displaycountries(data))
}

const displaycountries = countries => {

    const CountriesHTML = countries.map(country => getCountryHTML(country))
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join(' ');
}

const getCountryHTML = ({ name, flags, area, region }) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p><strong>Area: </strong>${area}</p>
            <p><strong>Region: </strong>${region}</p>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();