const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("button3");

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
    // Get the user's input text
    const searchText = searchInput.value;

    // Check if the input text is not empty
    if (searchText.trim() !== "") {
        const dynamicURL = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
        window.location.href = dynamicURL;
    }
});
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Trigger a click event on the search button when Enter is pressed
        searchButton.click();
    }
});


// Get references to the Apps icon and menu
const appsIcon = document.getElementById("apps-icon");
const appsMenu = document.getElementById("apps-menu");

// Toggle visibility of the Apps menu on click
appsIcon.addEventListener("click", function () {
    if (appsMenu.style.display === "block") {
        appsMenu.style.display = "none";
    } else {
        appsMenu.style.display = "block";
    }
});
