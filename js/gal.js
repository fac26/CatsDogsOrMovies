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

// Capitalise first letter function 

function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      

// Random Postcode Section

async function randomPostcodeGenerator () {
        // Variables
        const response = await fetch(`${randomPostcodeEndpoint}`);
        const data = await response.json();
        console.log(data);
        const keys = Object.keys(data.result);
        console.log(Array.isArray(keys));
        const values = Object.values(data.result);
        console.log(keys);
        console.log(capitaliseFirstLetter(keys[0]));
        console.log(values);        
        console.log(Object.entries(data.result));
        console.log(data.result.primary_care_trust);

        randomPostcodeButton.addEventListener('click', () => {
                randomPostcodeOutput.innerHTML = `<p>${keys[4]}-${values[4]}</p><p>${keys[0]}-${values[0]}</p><p>${keys[5]}-${values[5]}</p>`
        })
}


randomPostcodeGenerator();




