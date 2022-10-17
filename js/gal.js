// Welcome to UK Postcode Planner .js file 

// Postcode API base endpoint and specific endpoints for varying methods. E.g. look up postcode, random postcode etc.    
const baseEndpoint = 'https://api.postcodes.io';
const randomPostcodeEndpoint = `${baseEndpoint}/random/postcodes`

// Selected elements
const randomPostcodeOutput = document.querySelector('#random-postcode-output');
const randomPostcodeButton = document.querySelector('#random-postcode-button');

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

        randomPostcodeButton.addEventListener('click', () => {
                randomPostcodeOutput.innerHTML = `<div>${data.result.postcode}</div>`
        })
}


randomPostcodeGenerator();




