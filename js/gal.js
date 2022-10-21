// Welcome to UK Postcode Planner .js file 

// Postcode API base endpoint and specific endpoints for varying methods. E.g. look up postcode, random postcode etc.    
const baseEndpoint = 'https://api.postcodes.io';
const randomPostcodeEndpoint = `${baseEndpoint}/random/postcodes`

// Selected elements
const randomPostcodeOutput = document.querySelector('#random-postcode-output');
const randomPostcodeButton = document.querySelector('#random-postcode-button');
const outcodeRandomPostcodeInput = document.querySelector('#outcode-random-postcode-input');
const outcodeRandomPostcodeButton = document.querySelector('#outcode-random-postcode-button');
const outcodeRandomPostcodeOutput = document.querySelector('#outcode-random-postcode-output');


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

function createInnerHTML (el, keys, values) {
        // Default loading text in case user has to wait for data 
        el.innerHTML = `<p>...loading</p>`;

        el.innerHTML = 
                `<p>${keys[0]}-${values[0]}</p>
                 <p>${keys[10]}-${values[10]}</p>
                 <p>${keys[4]}-${values[4]}</p>
                 <p>${keys[9]}-${values[9]}</p>
                 <p>${keys[15]}-${values[15]}</p>
                 <p>${keys[17]}-${values[17]}</p>`
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
        createInnerHTML(randomPostcodeOutput, keys, values);
        

                }

randomPostcodeButton.addEventListener('click', (randomPostcodeGenerator));

async function randomPCUserOutcode (outcode) {
        // Variables 
        const response = await fetch(`${randomPostcodeEndpoint}?outcode=${outcode}`);
        const data = await response.json();
        // console.log(data.result); 
        const keys = mapKeys(data.result);
        const values = Object.values(data.result);

        createInnerHTML(outcodeRandomPostcodeOutput, keys, values)
        
}

outcodeRandomPostcodeButton.addEventListener('click', () => {
        const form = document.querySelector('#outcode-form');
        const formData = new FormData(form);
        const outcode = formData.get("outcode-random-postcode-input");
        randomPCUserOutcode(outcode);     
});

// randomPCUserOutcode()
// .catch(handleError);

randomPostcodeGenerator()
.catch(handleError);




