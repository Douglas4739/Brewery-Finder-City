'use strict';

function getBreweries(city) {
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
  .then(resp => resp.json())
  .then(respJson => displayResults(respJson))
  .catch(err => console.log('ERROR'))
}

function displayResults(responseJson) {
  for(let i=0; i < responseJson.length; i++){
    $('.js-search-results').append(`<a href=${responseJson[i].website_url}><li>${responseJson[i].name}</li></a>`)
  }
  
}

function watchForm() {
  $('form').submit(evt =>{
    evt.preventDefault();
    let city = $('.js-query').val();
    getBreweries(city);
    $('.js-query').val('');
  })
}

$(watchForm);
