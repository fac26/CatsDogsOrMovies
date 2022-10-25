const API = "https://api.thecatapi.com/v1/images/search?api_key=live_";
const KEY = "Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const breedSelector = document.querySelector("#breed--selector");
const grid = document.querySelector("#grid");

function getResponse(response) {
  if (!response.ok) {
    throw new Error(response.status);
  }
  console.log(response);
  return response.json();
}

function getBreeds(data) {
  data.map((breed) => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelector.appendChild(option);
  });
}

function getImages(data) {
  data.map((image) => {
    const gridCell = document.createElement("div");
    const img = document.createElement("img");

    img.src = image.url;
    img.classList.add("grid--image");
    gridCell.classList.add("grid--item");

    grid.appendChild(gridCell);
    gridCell.appendChild(img);
  });
}

const catchErrors = async (error) => { console.log(await error); }
const clearGrid = () => { grid.innerHTML = ""; }
