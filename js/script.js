console.log("script.js loaded");

let images = [];

const gifContainer = document.querySelector('#gif-container')
const button = document.querySelector('#fetch-gif-btn');
button.addEventListener("click", async function () { //Event listener to track when button is clicked
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=A4DgvoQDt51sLdOPcbLwrHuYG7l3KaPK&q=dogs&limit=25&rating=g");
    const data = await response.json();

    images = data.data.map(gif => gif.images.original.url); //learned from documentation, it takes the raw array and turns it into a new one to be used
    //above code goes through the data.data with the .map() function to get a new url, then puts it inside the global images array

    gifContainer.innerHTML = "";

    for (let i = 0; i < images.length; i++) { //incrementation of produced gifs stored
        gifContainer.innerHTML += `<img src=${images[i]} class = "col-3 mb-3">`;;
    }
    //above code loops through array to produce as many gifs as were stored (25); uses 'i' to show the gifs incremented
});
