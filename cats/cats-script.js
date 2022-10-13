fetch("https://api.thecatapi.com/v1/images/search", {
  method: "GET",
  headers: { "x-api-key": "live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP" },
})
.then((response) => {
	if (!response.ok) throw new Error(resonse.status);
	return response.json();
})


