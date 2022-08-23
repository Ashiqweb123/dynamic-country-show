const countryLoader = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {

    countries.forEach(country => {
        // console.log(country)
        const divContain = document.getElementById('countries')
        const div = document.createElement('div')
        div.classList.add('coutries-element')
        div.innerHTML = `
       <h4>${country.name}</h4>
       <h5>${country.region}</h5>
       <p>${country.population}</p>
       <button onclick="loadCountryDetails('${country.name}')">Details</button>
       
       `
        divContain.appendChild(div)
    })
}

const loadCountryDetails = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDeatail(data[0]))
}


const displayCountryDeatail = countryDetail => {
    console.log(countryDetail)

    const countryDetailDiv = document.getElementById('country-detail')
    countryDetailDiv.innerHTML=`
    <h4>Name:${countryDetail.name} </h4>
    <h5>Capital: ${countryDetail.capital}</h5>
    <img width="100px" src="${countryDetail.flag}"></img>
    
    
    `
}