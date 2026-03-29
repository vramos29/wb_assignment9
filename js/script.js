console.log("script.js loaded");

async function getgif() {
  const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=A4DgvoQDt51sLdOPcbLwrHuYG7l3KaPK&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
  const data = await response.json();
  const gif = data.gif[0];
  
  const output = document.getElementById("gif-container"); 
  output.textContent = gif;
}


const button = document.getElementById("fetch-gif-btn"); 

button.addEventListener("click", function () {
    console.log("button clicked");
    getgif(); 
});