const _key = "?api_key=live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const _api = "https://api.thecatapi.com/v1/images/search";
const form = document.querySelector("form");

const url = {
	get1: `${_api}${_key}`,
	get5: `${_api + _key}&limit=5`,
	get10: `${_api + _key}&limit=10`,
	get20: `${_api + _key}&limit=20`,
};

const getResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.status)
  };
  return response.json();
}

const processIntoGrid = (imageData) => {
  const grid = document.querySelector("#grid");

  imageData.map(image => {
    const img = document.createElement("img");
    const gridCell = document.createElement("div");

    img.src = image.url;
    gridCell.classList.add("grid--item");
    grid.appendChild(gridCell).appendChild(img);
  })
}

const catchErrors = async (error) => {
  console.log(await error);
}
