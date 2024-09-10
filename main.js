let resultCountries=document.getElementById("resultCountries");
let searchInput= document.getElementById("searchInput");
function createAndAppend(json_object){
let {name,flag,population}=json_object;

let countryCard= document.createElement("div");
countryCard.classList.add("country-card","d-flex", "flex-row","col-md-5" );
resultCountries.appendChild(countryCard);
let countryImg= document.createElement("img");
countryImg.src=flag;
countryImg.classList.add("country-flag");
countryCard.appendChild(countryImg);
let cardInfo= document.createElement("div");
countryCard.appendChild(cardInfo);
let countryName= document.createElement("h1");
countryName.textContent=name;
countryName.classList.add("country-name");
let countrypopulation= document.createElement("p");
countrypopulation.textContent=population;
countrypopulation.classList.add("country-population");
cardInfo.appendChild(countryName);
cardInfo.appendChild(countrypopulation);



}
let option={
    method:"GET",
};
fetch("https://apis.ccbp.in/countries-data", option)
.then(function(response){
return response.json();
})
.then(function(json_data){
    json_data.map((country)=>{
        createAndAppend(country);
    })
   
});