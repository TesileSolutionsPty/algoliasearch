// Initialize Algolia Client
const searchClient = algoliasearch(
  "18ZO40UVWY",
  "d3ee094323bd311dccdd54c7dbb933b6"
);

// Configure InstantSearch
const search = instantsearch({
  indexName: "users",
  searchClient
});

// Add Widgets
search.addWidgets([
  // Search Box
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for users..."
  }),

  // Hits (User List)
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
          <div class="ais-Hits-item" onclick="openModal('${hit.FirstName}', '${hit.Surname}', '${hit.email}', '${hit.profilePicture || ''}')">
            <img src="${hit.profilePicture || 'https://via.placeholder.com/60'}" alt="Profile Picture">
            <div>
              <h2>${hit.FirstName || "No Name"} ${hit.Surname || ""}</h2>
              <p>${hit.email || "No Email"}</p>
            </div>
          </div>
        `;
      }
    }
  }),

  // Refinement List (Filter by Department, Role, etc.)
  instantsearch.widgets.refinementList({
    container: "#refinement-list",
    attribute: "department", // CHANGE this to a valid attribute in your Algolia index
    searchable: true,
    showMore: true
  }),

  // Numeric Menu (Example: Filter by Years of Experience)
  instantsearch.widgets.numericMenu({
    container: "#numeric-menu",
    attribute: "yearsOfExperience", // CHANGE this to a valid attribute in your index
    items: [
      { label: "All" },
      { label: "Less than 2 years", end: 2 },
      { label: "2 to 5 years", start: 2, end: 5 },
      { label: "More than 5 years", start: 5 }
    ]
  }),

  // Pagination
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
]);

// Start Search
search.start();

// Modal Functions
function openModal(firstName, surname, email, profilePicture) {
  document.getElementById("modalProfilePicture").src = profilePicture || 'https://via.placeholder.com/100';
  document.getElementById("modalName").innerText = `${firstName} ${surname}`;
  document.getElementById("modalEmail").innerText = email;
  document.getElementById("userModal").style.display = "block";
}

function closeModal() {
  document.getElementById("userModal").style.display = "none";
}
