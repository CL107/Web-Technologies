const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a75bc0fc17760878ca9304e336c30dc',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

// When the user clicks the search button
document.getElementById("search-button").addEventListener("click", function() {searchFunction()} );

var form=document.getElementById("explore-form");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}

form.addEventListener('submit', submitForm);

function searchFunction() {
    
    // Get the search input
    var input = document.getElementById("explore-search").value;

    // Fetch the recipes from edamam API
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${input}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => createCard(response))
    .catch(err => console.error(err));

}

// Dynamically create a card for each recipe
function createCard(response) {
   
    var response = response;
    console.log(response);

    // Get the number of recipes
    var numRecipes = response[count];
    console.log(numRecipes);
   
    // Get the container div
    var container = document.getElementById("explore-results");
   
    // Create a figure for each recipe
    var recipeFigure = document.createElement("figure");
    recipeFigure.id = "recipe-figure";
    recipeFigure.classList.add("grid-image-container");
    container.appendChild(recipeFigure);
    
    // Retrieve an image for each recipe
    var recipeImage = document.createElement("img");
    recipeImage.id = "recipe-image";
    recipeImage.classList.add("grid-image");
    recipeImage.src = "/Images/splash.jpg"
    recipeFigure.appendChild(recipeImage);

    // Retrieve a caption for each recipe
    var recipeCaption = document.createElement("figcaption");
    recipeCaption.id = "recipe-caption";
    recipeCaption.classList.add("caption-centered");
    recipeCaption.innerHTML = "Recipe Name";
    recipeFigure.appendChild(recipeCaption);
}

