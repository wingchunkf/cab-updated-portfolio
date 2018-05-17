// when user clicks the button, the iframe and button  will be removed and replaced with a text-filled div

// step 1 - assign variables to button and iframes

var premierDiv = document.querySelector('.premier-section');
var castleDiv = document.querySelector('.castle-section');
var premierButton = document.querySelector('.premier');
var castleButton = document.querySelector('.castle-rock');
var premierDetails = document.querySelector('.premier-details');
var castleDetails = document.querySelector('.castle-details');
var premierChevron = document.querySelector('.left-chevron-premier');
var castleChevron = document.querySelector('.left-chevron-castle');

// step 2 - add eventlistener to buttons which will remove iframe and display project details

premierButton.addEventListener("click", function() {
    premierButton.style.visibility = "hidden";
    premierDetails.style.display = "block"; 
    premierChevron.style.display = "block";
});

premierChevron.addEventListener('click', function() {
    premierChevron.style.display = "none";
    premierDetails.style.display = "none";
    premierButton.style.visibility = "visible";
})

castleButton.addEventListener("click", function() {
    castleButton.style.visibility = "hidden";
    castleDetails.style.display = "block";
    castleChevron.style.display = "block";
});

castleChevron.addEventListener("click", function() {
    castleChevron.style.display = "none";
    castleDetails.style.display = "none";
    castleButton.style.visibility = "visible";
});







