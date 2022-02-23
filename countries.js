const loadCountires = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => displyCountries(data));
}
loadCountires();

const displyCountries = countries => {
    console.log(countries);
}