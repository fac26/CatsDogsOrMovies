
// Postcode API base endpoint and specific endpoints for varying methods. E.g. look up postcode, random postcode etc.    
const baseEndpoint = 'https://api.postcodes.io';
const randomPostcodeEndpoint = `${baseEndpoint}/random/postcodes`

// Selected elements
const randomPostcodeOutput = document.querySelector('#random-postcode-output');

// Handle error function

function handleError(err) {
        console.log('OH NO!');
        console.log(err);
        // somevar.textContent = `Something went wrong: ${err}`;
      }

// Random Postcode Section

async function randomPostcodeGenerator () {
        // Variables
        const response = await fetch(`${randomPostcodeEndpoint}`);
        const data = await response.json();
        console.log(data);
        console.log(data.result.postcode);
        console.log(data.result.primary_care_trust);

}

randomPostcodeGenerator();




