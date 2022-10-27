// <-- Initialize variables -->
const API = "https://api.thecatapi.com/v1/images/search?api_key=live_";
const KEY = "Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const breedSelector = document.querySelector("#breed--selector");
const grid = document.querySelector("#grid");

// <-- Get a response from the API -->
function getResponse(response) {
  if (!response.ok) {
    throw new Error(response.status);
  }
  console.log(response);
  return response.json();
}


// <-- Get data on breeds from the api and assign it to the select element -->
function getBreeds(data) {
  data.filter ((image) => { image?.url != null }) // not sure if this is necessary
  data.map ((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelector.appendChild(option);
    });
}

// <-- Get data on images from the api and assign it to the grid -->
function getImages(data) {
  data.map((image) => {
    const gridCell = document.createElement("div");
    const img = document.createElement("img");

    img.src = image.url;
    img.alt = image.breeds[0]?.name || "Random Cat";
    img.classList.add("grid--image");
    gridCell.classList.add("grid--item");

    grid.appendChild(gridCell);
    gridCell.appendChild(img);
  });
}

// <-- Short functions - catch errors and log them, and refresh the html to display new images -->

const catchErrors = async (error) => { alert(await error); }
const clearGrid = () => { grid.innerHTML = ""; }