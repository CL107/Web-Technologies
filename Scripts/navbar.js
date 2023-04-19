// Description: This file contains the code for the sticky navbar

// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {
    // When the user scrolls the page, execute stickyFunction
    window.addEventListener('scroll', stickyFunction);
    // Get the navbar
    var topnav = document.getElementById("topnav");
    // Get the offset position of the navbar
    var sticky = topnav.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // Remove the sticky class when you leave the scroll position
    function stickyFunction() {
        if (window.scrollY >= sticky) {
            topnav.classList.add("sticky")
        } else {
            topnav.classList.remove("sticky");
        }
    }
});
