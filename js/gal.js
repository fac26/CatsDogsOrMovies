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

function mapKeys (key) {
      return Object.keys(key).map(x => capitaliseFirstLetter(x));
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
        const keys = mapKeys(data.result);
        const values = Object.values(data.result);

        // console.log(data);
        // console.log(Array.isArray(keys));
        // console.log(keys);
        // console.log(capitaliseFirstLetter(keys[0]));
        // console.log(values);        
        // console.log(Object.entries(data.result));
        // console.log(data.result.primary_care_trust);

        // Default loading text in case user has to wait for data 
        randomPostcodeOutput.innerHTML = `<p>...loading</p>`;

        randomPostcodeOutput.innerHTML = 
                `<p>${keys[0]}-${values[0]}</p>
                 <p>${keys[10]}-${values[10]}</p>
                 <p>${keys[4]}-${values[4]}</p>
                 <p>${keys[9]}-${values[9]}</p>
                 <p>${keys[15]}-${values[15]}</p>
                 <p>${keys[17]}-${values[17]}</p>`

        randomPostcodeButton.addEventListener('click', (randomPostcodeGenerator));
}

async function randomPCUserOutcode (outcode) {
        // Variables 
        const response = await fetch(`${randomPostcodeEndpoint}${outcode}`);
        const data = await response.json();
}

randomPCUserOutcode()
.catch(handleError);

randomPostcodeGenerator()
.catch(handleError);




