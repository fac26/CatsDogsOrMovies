const key = "&live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const api = "https://api.thecatapi.com/v1/images/search";

const limits = {
	get1: api + key, //request single image
	get5: api + "&limit=5" + key, //request 5 images
	get10: api + "&limit=10" + key, //request 10 images
	get20: api + "&limit=20" + key, //request 20 images
};

//test if limits are working
const testLimits = () => {
	for (let i = 0; i < limits.length; i++) {
		console.log(limits[i]);
	}
};

//reusable fetch function
async function fetch(getLimit) {
	const response = await fetch(getLimit);
	if (!response.ok) throw new Error(response.status);
	console.log(response);
	return response.json();
}
