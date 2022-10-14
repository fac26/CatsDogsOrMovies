const url5 = "https://api.thecatapi.com/v1/images/search?limit=5";
const url10 = "https://api.thecatapi.com/v1/images/search?limit=10";
const url20 = "https://api.thecatapi.com/v1/images/search?limit=20";
const key = "live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";

fetch("url5", { headers: { "x-api-key": key } }).then((response) => {
	if (!response.ok) throw new Error(response.status);
	return response.json();
});
