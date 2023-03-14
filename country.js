const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".countryImage img");
const countryNameHeading = document.querySelector('.countryDeatil h5')
const countryNativeName = document.querySelector('.nativeName')
const countryPopulation = document.querySelector('.population')
const countryLanguage = document.querySelector('.language')
const countryRegion =document.querySelector('.region')
const countryCapital = document.querySelector('.capital')
const countrySubRegion = document.querySelector('.subRegion')
const countryCurrency = document.querySelector('.currency')
const countryDomain = document.querySelector('.domain')
const countryBorders = document.querySelector('.borderCountries')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(country)
    flagImage.src = country.flags.svg
    countryNameHeading.innerHTML = country.name.common
    countryPopulation.innerText= country.population
    countryRegion.innerText= country.region
    countryDomain.innerText = country.tld

    if(country.currencies){
      countryCurrency.innerText= Object.values(country.currencies).map((currency)=>currency.name)
    }else{
      countryCurrency.innerText= "No Specific Currency"
    }
    if(country.languages){
      countryLanguage.innerText= Object.values(country.languages)
    }else{
      countryLanguage.innerText= "No Specific Language"
    }    
    if(country.subregion){
      countrySubRegion.innerText= country.subregion
    }else{
      countrySubRegion.innerText= "No Sub Region"
    }
    if(country.capital){
      countryCapital.innerText= country.capital[0]
    }else{
      countryCapital.innerText='No Capital'
    }
    if(country.name.nativeName){
      countryNativeName.innerText= Object.values(country.name.nativeName)[0].common;
    }else{
      countryNativeName.innerText= country.name.common
    }

    if(country.borders){
      country.borders.forEach((border)=>{
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res)=>res.json())
        .then(([bordersCountrys])=>{
          // console.log(bordersCountrys)
          const borderCountryTag = document.createElement('a')
          borderCountryTag.innerText= bordersCountrys.name.common
          borderCountryTag.href = `country.html?name=${bordersCountrys.name.common}`
          countryBorders.append(borderCountryTag)
        })
      })
    }


  });
