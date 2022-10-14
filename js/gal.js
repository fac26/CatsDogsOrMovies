const random = fetch("https://api.postcodes.io/random/postcodes");
const output = document.querySelector('output');
const submit = document.querySelector('#submit');


addEventListener('click', submit) {



random
.then((response) => {return response.json()})
.then((data) => {
   
        
      
        
        const newContent = data;
        output.textContent = newContent;
      
        // add the text node to the newly created div
        // newDiv.appendChild(newContent);
      
        // add the newly created element and its content into the DOM
        // const currentDiv = document.getElementById("div1");
        // document.body.insertBefore(newDiv, currentDiv);
      
})
}