const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fc3ed54afmsh500aee0a29b51a1p147082jsne040073c9798',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

// When the user clicks the search button
document.getElementById("search-button").addEventListener("click", searchFunction());

function searchFunction() {
    
    var input = document.getElementById("explore-search").value;
    alert(input);

    fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}



