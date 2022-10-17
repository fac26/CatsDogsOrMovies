
// Postcode API base endpoint and specific endpoints for varying methods. E.g. look up postcode, random postcode etc.    
const baseEndpoint = 'https://api.postcodes.io';
const randomPostcodeEndpoint = `${baseEndpoint}/random/postcodes`

// Selected elements
const output = document.querySelector('output');
const submit = document.querySelector('#submit');


// const fetchRandom = 

function randomPostcodeGenerator () {
        fetch(randomPostcodeEndpoint)
.then(response => response.json())
.then(randomPostcodeObj => console.log(randomPostcodeObj)
)
}

randomPostcodeGenerator();




