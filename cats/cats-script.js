const _key = "?api_key=live_Q6eMoEl8dw8aPgrxtXNaR2882nOcbaIfr3DCtWipUv5TWQx5wt7we7ui8YpRpYoP";
const _api = "https://api.thecatapi.com/v1/images/search";

const form = document.querySelector("form");

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

const processResponse = async (data) => {
  let imageData = await data;

  await imageData.map(function(imageData) {

    let image = document.createElement("img");
    image.src = `${imageData.url}`;

    let gridCell = document.createElement('div');
      //gridCell.classlist.add grid
    gridCell.appendChild(image);

    document.querySelector('#grid').appendChild(gridCell);
  });
}

const catchErrors = async (error) => {
  console.log(await error);
}


//wrap each fetch in event listener tied to button for (somefunction)
fetch(url.get20)
  .then(getResponse)
  .then(processResponse, () => {
    //does this work to further process the response in addition?
  })
  .catch(catchErrors);