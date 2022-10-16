const _key = "&live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const _api = "https://api.thecatapi.com/v1/images/search";

const imageLimit = {
	get1: _api + _key, //request single image
	get5: _api + "&limit=5" + _key, //request 5 images
	get10: _api + "&limit=10" + _key, //request 10 images
	get20: _api + "&limit=20" + _key, //request 20 images
};

//test if limits are working
const checkLimitVariables = () => {
	const value = [];
	Object.keys(imageLimit).forEach((key) => {
		return value.push(key);
	});
	console.table(value);
};

//reusable fetch function
async function fetch(getLimit) {
	const response = await fetch(getLimit);
	if (!response.ok) throw new Error(response.status);
	console.log(response);
	return response.json();
}

checkLimitVariables();
