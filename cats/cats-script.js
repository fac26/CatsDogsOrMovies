const _key = "&live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const _api = "https://api.thecatapi.com/v1/images/search";
/* const _headers = {
  "ratelimit-limit": "10000",
  "ratelimit-remaining": "10000",
  "ratelimit-reset": "10000",
}; */ //not sure how to implement

const imageLimit = {
	//request x amount of images
	get1: _api + _key,
	get5: _api + "&limit=5" + _key,
	get10: _api + "&limit=10" + _key,
	get20: _api + "&limit=20" + _key,
	specificImage: _api + `${img_id}` + _key, //what?
};

//test if limit vars are working
const checkLimitVariables = () => {
	const value = [];
	Object.keys(imageLimit).forEach((key) => {
		return value.push(key);
	});
	console.table(value);
};

//clean .then(response => response.json)
const getResponse = (response) => {
	if (!response.ok) {
		throw new Error(response.status);
	}
	console.log(response);
	return response.json();
};

//clean .then(json => console.log(json))
const processResponse = (json) => {
	{
		for (let i = 0; i < json.length; i++) {
			console.log(json[i]);
		}
	}
};

//clean .catch(json => console.error(error))
const catchError = (error) => {
	{
		for (let i = 0; i < error.length; i++) {
			console.error(error[i]);
		}
	}
};

const fetch = async (url) => {
	await fetch(url);
}; //not sure if this does anything here

checkLimitVariables();

fetch(imageLimit.get1);
await getResponse;
await processResponse;
await catchError; // ok?
