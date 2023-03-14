const container = document.querySelector('.containers')
const themeChanger = document.querySelector('.themeChanger')
const input = document.querySelector('.inputSearch')
const dropdownMenu = document.querySelector('.dropdown-menu')


let allCountries = '' 


async function getData (){
    
        const respone = await fetch("./data.json")

        let data = await respone.json()
        // console.log(data)
        
        data.map(item => {
                allCountries +=`
                <div class="item">
            <a href="/country.html?name=${item.name}">
            <img src=${item.flag}>
            <div class="detail">
            <h5>${item.name}</h5>
            <h6><b>Population: </b>${item.population}</h6>
            <h6><b>Region: </b>${item.region}</h6>
            <h6><b>Capital: </b>${item.capital}</h6>
            </a>
            </div>
            </div>
            `
    });


        
         container.innerHTML = allCountries

        

}
getData()
input.addEventListener('input',  (e) => {
        const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
        renderCountries(filteredCountries)
      }) 

themeChanger.addEventListener('click', () => {
        document.body.classList.toggle('dark')
      })
