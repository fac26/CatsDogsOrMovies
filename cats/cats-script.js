const _key = "?api_key=live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const _api = "https://api.thecatapi.com/v1/images/search";

const form = document.querySelector("form"); //returns null?

const url = {
	get1: _api + _key,
	get5: `${_api + _key}&limit=5`,
	get10: `${_api + _key}&limit=10`,
	get20: `${_api + _key}&limit=20`,
	//specificImage: _api + `${img_id}` + _key, //what?
};

const getResponse = (response) => {
  if (!response.ok) { throw new Error(response.status) };
  return response.json();
}

const processResponse = (imageData) => {

  imageData.forEach(image => {
    const img = document.createElement("img");
    img.src = image.url;
    document.getElementById("grid").appendChild(img);
  })
}

const catchErrors = async (error) => {
  console.log(await error);
}


//wrap each fetch in event listener tied to button for (somefunction)
fetch(url.get20)
  .then(getResponse)
  .then(processResponse)
  //.then(something something)
  .catch(catchErrors);