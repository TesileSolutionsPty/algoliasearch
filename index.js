// Initialize Algolia Search Client
const searchClient = algoliasearch(
  "18ZO40UVWY",  // Your Application ID
  "d3ee094323bd311dccdd54c7dbb933b6"  // Your Search-Only API Key
);

// Create the InstantSearch Instance
const search = instantsearch({
  indexName: "users",
  searchClient,
});

// Add Search Box
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for users...",
  }),

  // Add Hits (Results)
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
          <div class="ais-Hits-item">
            <img src="${hit.profilePicture || 'https://via.placeholder.com/60'}" alt="User Image">
            <div>
              <h2>${hit.FirstName || "No First Name"}</h2>
              <p>${hit.Surname || "No Surname"}</p>
            </div>
          </div>
        `;
      },
    },
  }),
]);

// Start InstantSearch
search.start();
