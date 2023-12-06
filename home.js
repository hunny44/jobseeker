function toggleNavbar() {
  var x = document.querySelector(".navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// script.js
function search() {
  // Get the search query
  var searchQuery = document.getElementById('searchInput').value;

  // Perform the search (this is just an example)
  // Replace this logic with your actual search functionality
  var searchResults = performSearch(searchQuery);

  // Display the search results
  displayResults(searchResults);
}

function performSearch(query) {
  // Replace this function with your actual search implementation
  // For demonstration, returning sample results
  return [
    " https://www.naukri.com/" + query,
    " https://www.naukri.com/" + query,
    "https://www.naukri.com" + query
  ];
}

function displayResults(results) {
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = 'No results found.';
  } else {
    var ul = document.createElement('ul');

    results.forEach(function (result) {
      var li = document.createElement('li');
      li.textContent = result;
      ul.appendChild(li);
    });

    resultsContainer.appendChild(ul);
  }


