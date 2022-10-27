// Welcome to UK Postcode Planner .js file. 

// Postcode API base endpoint and specific endpoints for varying methods. E.g. look up postcode, random postcode etc.

const baseEndpoint = 'https://api.postcodes.io';
const randomPostcodeEndpoint = `${baseEndpoint}/random/postcodes`
const uniquePostcodeEndpoint = `${baseEndpoint}/postcodes`

// Data.police.uk local force endpoint.
const localPoliceForceEndpoint = 'https://data.police.uk/api/locate-neighbourhood'; 

// Selected elements.

const randomPostcodeOutput = document.querySelector('#random-postcode-output');
const randomPostcodeButton = document.querySelector('#random-postcode-button');
const outcodeRandomPostcodeInput = document.querySelector('#outcode-random-postcode-input');
const outcodeRandomPostcodeButton = document.querySelector('#outcode-random-postcode-button');
const outcodeRandomPostcodeOutput = document.querySelector('#outcode-random-postcode-output');
const uniquePostcodeInput = document.querySelector('#unique-postcode-input');
const uniquePostcodeButton = document.querySelector('#unique-postcode-button');
const uniquePostcodeOutput = document.querySelector('#unique-postcode-output');
const policeDataOutput = document.querySelector('#police-data-output');
const outcodeForm = document.querySelector('#outcode-form');
const uniqueForm = document.querySelector('#unique-form');


// Handle error function.

function handleError(err) {
        console.log('OH NO!');
        console.log(err);
      }

// Map function to loop over all keys in returned object.

function mapKeys (key) {
      return Object.keys(key).map(x => capitaliseFirstLetter(x));
}

// Map function to loop over all values in returned object.
function mapValues (value) {
      return Object.values(value).map(x => capitaliseFirstLetter(x));
}

// Function to capitalise first letter of a string. 

function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

// Function to render HTML on page.
function createInnerHTML (el, keys, values) {
        // Default loading text in case user has to wait for data 
        el.innerHTML = `<p>...your requested data is loading dear user</p>`;

        el.innerHTML = 
                `<p>${keys[0]} - ${values[0]}</p>
                 <p>${keys[10]} - ${values[10]}</p>
                 <p>${keys[4]} - ${values[4]}</p>
                 <p>${keys[9]} - ${values[9]}</p>
                 <p>${keys[15]} - ${values[15]}</p>
                 <p>${keys[17]} - ${values[17]}</p>`
}

      

// Random Postcode Section.

// Async function to await API responses. 
async function randomPostcodeGenerator () {
        // Variables
        const response = await fetch(`${randomPostcodeEndpoint}`);
        const data = await response.json();
        const keys = mapKeys(data.result);
        const values = Object.values(data.result);
        
        //Calling createInnerHTML function. 
        createInnerHTML(randomPostcodeOutput, keys, values);
        

                }

randomPostcodeButton.addEventListener('click', (randomPostcodeGenerator));

// User Outcode Postcode Section

// This async function accepts a user generated outcode and filters results based on that input.

async function randomPCUserOutcode (outcode) {
        // Variables 
        const response = await fetch(`${randomPostcodeEndpoint}?outcode=${outcode}`);
        const data = await response.json();
        // Logic to alert user to invalid postcode.
        if (data.result == null) {
                outcodeRandomPostcodeOutput.textContent = 'This is not a valid postcode user 😥'  
        } else {
         
        const keys = mapKeys(data.result);
        const values = Object.values(data.result);

        createInnerHTML(outcodeRandomPostcodeOutput, keys, values);
        }
}

outcodeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(outcodeForm);
        const outcode = formData.get("outcode-random-postcode-input");
        randomPCUserOutcode(outcode)
        .catch(handleError);     
});

// Unique Postcode Section. 

// This async function accepts a user generated postcode and filters results based on that input.
async function uniquePostcodeGenerator (postcode) {
        // Variables
        const response = await fetch(`${uniquePostcodeEndpoint}/${postcode}`);
        const data = await response.json();

        // Logic to alert user to invalid postcode.
        if (data.status == 404) {
                uniquePostcodeOutput.textContent = 'This is not a valid postcode user 😥'  
        } else {
         
        const keys = mapKeys(data.result);
        const values = Object.values(data.result);

        createInnerHTML(uniquePostcodeOutput, keys, values);
        }

        // Latitude and longitude are passed as values to localPoliceForceGenerator async function.
        const latitude = data.result.latitude;
        const longitude = data.result.longitude;
        

        localPoliceForceGenerator(latitude, longitude)
        .catch(handleError);

}

uniqueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(uniqueForm);
        const uniquePostcode = formData.get("unique-postcode-input");
        uniquePostcodeGenerator(uniquePostcode)
        .catch(handleError);     
});

// Data Police API Section 

// This async function requests the local police force based on the latitude and longitude values passed to it by the uniquePostcodeGenerator function
async function localPoliceForceGenerator (latitude, longitude) {
        // Variables
        const response = await fetch(`${localPoliceForceEndpoint}?q=${latitude},${longitude}`);
        const data = await response.json();
        const keys = mapKeys(data);
        const values = mapValues(data);

        policeDataOutput.innerHTML = `<p>...your requested data is loading dear user</p>`;

        policeDataOutput.innerHTML = 
                `<p><b>And your local 🚨Bobbies🚨 on the beat are...</b></p>
                 <p>${keys[0]} - ${values[0]}</p>`
}





