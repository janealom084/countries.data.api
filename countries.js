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
        const h2 = document.createElement('h2');
        h2.innerText = country.name.common;
        div.appendChild(h2);
        const p = document.createElement('p');
        p.innerText = `Capital: ${country.capital} Area: ${country.area} Population: ${country.population}`
        div.appendChild(p);
        countriesDiv.appendChild(div);

    })
}