// Initialize Algolia Client
const searchClient = algoliasearch("YOUR_APP_ID", "YOUR_SEARCH_API_KEY");

const search = instantsearch({
  indexName: "users",
  searchClient,
});

// Configure Search Box (Ensuring Only One Instance)
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search students...",
    showReset: true,
    showSubmit: false,
  }),
]);

// Filters - Updated to Match Your Algolia Attributes
search.addWidgets([
  instantsearch.widgets.refinementList({
    container: "#age-group-filter",
    attribute: "StudentAgeGroup", 
  }),

  instantsearch.widgets.refinementList({
    container: "#city-filter",
    attribute: "StudentCity",  
  }),

  instantsearch.widgets.refinementList({
    container: "#gender-filter",
    attribute: "StudentGender",  
  }),

  instantsearch.widgets.refinementList({
    container: "#province-filter",
    attribute: "StudentProvince",  
  }),
]);

// Hits (Search Results)
search.addWidgets([
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
          <div class="ais-Hits-item" onclick="openModal('${hit.FirstName}', '${hit.Surname}', '${hit.email}', '${hit.profilePicture || ''}')">
            <img src="${hit.profilePicture || 'https://via.placeholder.com/60'}" alt="${hit.FirstName}">
            <div>
              <h2>${hit.FirstName || "No Name"} ${hit.Surname || ""}</h2>
              <p>${hit.email || "No Email"}</p>
            </div>
          </div>
        `;
      },
    },
  }),
]);

// Pagination
search.addWidgets([
  instantsearch.widgets.pagination({
    container: "#pagination",
  }),
]);

// Start the search
search.start();

// Modal Functionality
function openModal(firstName, surname, email, profilePicture) {
  document.getElementById("modalName").textContent = `${firstName} ${surname}`;
  document.getElementById("modalEmail").textContent = email;
  document.getElementById("modalProfilePicture").src = profilePicture || 'https://via.placeholder.com/100';
  document.getElementById("userModal").style.display = "block";
}

function closeModal() {
  document.getElementById("userModal").style.display = "none";
}
