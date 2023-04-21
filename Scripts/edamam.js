const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e7a87fc4a1mshee7bbe9fdc566c9p1aa2cejsn7c35b18f4afe',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

document.addEventListener('DOMContentLoaded', function() {
    // When the user clicks the search button
    document.getElementById("search-button").addEventListener("click", function() {searchFunction()} );

    
    var form=document.getElementById("explore-form");
    function submitForm(event){

    // Preventing page refresh
    event.preventDefault();
    }

    form.addEventListener('submit', submitForm);

    // Function to search for recipes
    function searchFunction() {
        
        // Get the search input
        var input = document.getElementById("explore-search").value;

        // Fetch the recipes from edamam API
        fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${input}`, options)
        .then(response => response.json())
        .then(response => {obj = response;})
        .then(response => console.log(obj))
        .then(response => createCard(obj))
        .catch(err => console.error(err));

    }

    // Dynamically create a card for each recipe
    function createCard(response) {
        
        // Get the number of recipes
        var numRecipes = response.hits.length;
        console.log(numRecipes);
    
        //Loop iterating over each hit on the recipe
        for (var i = 0; i < numRecipes; i++) {
            // Get the container div
            var container = document.getElementById("explore-results");
        
            // Create a link for the figure
            var recipeLink = document.createElement("a");
            recipeLink.id = `recipe-link${i}`;
            recipeLink.href = response.hits[i].recipe.url;
            container.appendChild(recipeLink);
            
            // Create a figure for each recipe
            var recipeFigure = document.createElement("figure");
            recipeFigure.id = `recipe-figure${i}`;
            recipeFigure.classList.add("grid-image-container");
            recipeLink.appendChild(recipeFigure);
            
            // Retrieve an image for each recipe
            var recipeImage = document.createElement("img");
            recipeImage.id = `recipe-image${i}`;
            recipeImage.classList.add("grid-image");
            recipeImage.src = response.hits[i].recipe.image;
            recipeFigure.appendChild(recipeImage);

            // Retrieve a caption for each recipe
            var recipeCaption = document.createElement("figcaption");
            recipeCaption.id = `recipe-caption${i}`;
            recipeCaption.classList.add("caption-centered");
            recipeCaption.innerHTML = response.hits[i].recipe.label;
            recipeFigure.appendChild(recipeCaption);
        }
    }
});
