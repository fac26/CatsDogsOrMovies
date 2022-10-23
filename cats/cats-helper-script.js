const _key = "?api_key=live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const _api = "https://api.thecatapi.com/v1/images/search";
const	url25 = `${_api + _key}&limit=25`;

const breedSelector = document.querySelector("#breed--selector");
const grid = document.querySelector("#grid");
const form = document.querySelector("form");

const getBreeds = async (data) => {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  data = await response.json();
  data.map((breed) => {
    const option = document.createElement("option");

    option.value = breed.id;
    option.textContent = breed.name;

    breedSelector.appendChild(option);
  });
}

const getResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.status)
  };
  console.log(response);
  return response.json();
}

const processResponse = (data) => {

  data.map(image => {
    const gridCell = document.createElement("div");
    const img = document.createElement("img");

    img.src = image.url;
    img.classList.add("grid--image");
    gridCell.classList.add("grid--item");

    grid.appendChild(gridCell);
    gridCell.appendChild(img);
  });
}

const catchErrors = async (error) => {
  console.log(await error);
}
