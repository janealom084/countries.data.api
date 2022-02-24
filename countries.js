const loadCountires = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => displyCountries(data));
}
loadCountires();

const countriesDiv = document.getElementById('countries')
const displyCountries = countries => {
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h2> ${country.name.common} </h2>
            <p> ${country.capital} Area: ${country.area} Population: ${country.population}</p>
        `
        countriesDiv.appendChild(div);
    })
}

