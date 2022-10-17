
// Postcode API base endpoint and specific endpoints for varying methods. E.g. look up postcode, random postcode etc.    
const baseEndpoint = 'https://api.postcodes.io';
const randomPostcodeEndpoint = `${baseEndpoint}/random/postcodes`

// Selected elements
const output = document.querySelector('output');
const submit = document.querySelector('#submit');


// const fetchRandom = 

async function randomPostcodeGenerator () {
        const response = await fetch(`${randomPostcodeEndpoint}`);
        const data = await response.json();
        console.log(data);
        console.log(data.result.postcode);
        console.log(data.result.primary_care_trust);

}

randomPostcodeGenerator();




