fetch("./our_team.json")
  .then(response => response.json()) // Convert response to JSON
  .then(data => {

    const teamList = document.getElementById("team-list"); // Get the team list element
    
    data.team.forEach(member => {
      const listItem = document.createElement("li"); // Create a list item
      listItem.innerHTML = `<h2>${member.nombre}</h2><h3>${member.rol}</h3><p>${member.descripcion}</p>`; // Set the text content to member's name and role
      teamList.appendChild(listItem); // Append the list item to the team list
    });
  })
  .catch(error => console.error("Error fetching team data:", error)); // Handle any errors
  
function searchFunction() {
  const searchInput = document.getElementById("search-input").value.toLowerCase().trim(); // Get the search input value and convert to lowercase
  fetch("./travel_recommendation_api.json")
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      const recommendationList = document.getElementById("recommendation-list"); // Get the recommendation list element
      recommendationList.innerHTML = ""; // Clear previous recommendations
      if(searchInput === "countries" || searchInput === "country") {
          data.countries.slice(0,2).forEach(country => {
            const listItem2 = document.createElement("li"); // Create a list item
            listItem2.innerHTML = `<img src="${country.imageUrl}" alt="${country.name}"><h2>${country.name}</h2>
            ${country.cities.map(city => `<p>${city.name}</p>`).join("")}`; // Set the text content to country's name and description
            recommendationList.appendChild(listItem2); // Append the list item to the recommendation list
            console.log(country.name); // Log the country name to the console
          });
    }
      else if(searchInput === "beaches" || searchInput === "beach") {
          data.beaches.forEach(beach => {
            const listItem2 = document.createElement("li");
            listItem2.innerHTML = `<img src="${beach.imageUrl}" alt="${beach.name}"><h2>${beach.name}</h2><p>${beach.description}</p>`; // Set the text content to beach's name and description
            recommendationList.appendChild(listItem2);
            console.log(beach.name); // Log the beach name to the console
          });
    }
      else if(searchInput === "temples" || searchInput === "temple") {
          data.temples.forEach(temple => {
            const listItem2 = document.createElement("li");
            listItem2.innerHTML = `<img src="${temple.imageUrl}" alt="${temple.name}"><h2>${temple.name}</h2><p>${temple.description}</p>`; // Set the text content to temple's name and description
            recommendationList.appendChild(listItem2);
            console.log(temple.name); // Log the temple name to the console
      });
    }
      else {
                recommendationList.innerHTML = "<li>No results found. Try: countries, temples or beaches.</li>";
          }
    
    })
    .catch(error => console.error("Error fetching travel recommendation data:", error));
}
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchFunction); // Add click event listener to the search button

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
  document.getElementById("search-input").value = "";
  document.getElementById("recommendation-list").innerHTML = "";
});