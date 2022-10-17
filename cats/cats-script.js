//declare variables

const _key = "&live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP"; 
const _api = "https://api.thecatapi.com/v1/images/search";

const imageLimit = {
	get1: _api + _key,
	get5: `${_api}&limit=5${_key}`,
	get10: `${_api}&limit=10${_key}`,
	get20: `${_api}&limit=20${_key}`,
	//specificImage: _api + `${img_id}` + _key, //what?
};

const rateHeaders = {
	rateLimit: "ratelimit-limit",
	rateLimitRemaining: "ratelimit-remaining",
	rateLimitConsumed: "ratelimit-consumed",
	rateLimitReset: "ratelimit-reset",
};

//clean up some functionality
const getResponse = (response) => {
	if (!response.ok) {
		throw new Error(response.status);
	}
	console.log(response);
	return response.json();
};

const processResponse = (json) => {
	for (let i = 0; i < json.length; i++) {
		console.log(json[i]);
	}
};

const catchError = (error) => {
	for (let i = 0; i < error.length; i++) {
		console.error(error[i]);
	}
};

/* 
const fetcher = async (url) => {
  return await fetch((url = getResponse(url)));
}; not sure if this does anything here
*/

//search function use img_id
//filter function
//sort function
//by breed, category, name, alphebetical

//test if everything reads
const myDebug = async () => {
	//don't forget awaits
	let titleCSS = ["color: orange", "background-color: #444", "padding: 2px 4px", "border-radius: 2px"].join(";");
	console.log("%cmyDebug:", titleCSS); //display title for debugging
	console.table(imageLimit); //check searchlimit object
	//query header limits
	//console log response status
	//console log response object
	//console log any errors
};

//wrap in event listener to debug on keypress
myDebug();

//wrap fetch requests in event listeners

/*
fetch(url, {headers}) {
.then(getResponse)
.then(processResponse)
.then(catchError)
*/

//repeat per limit request
