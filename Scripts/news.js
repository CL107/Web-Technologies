// Description: This file contains the code for the sticky navbar

// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {
    
    var i = 1;

    while (true) {

        fetch(`article${i}.txt`)
        .then(article => {obj = article;})
        .then(article => console.log(obj))
        .then(article => createArticle(obj))
        .catch(err => console.error(err));
    }

    function createArticle(article) {

});
