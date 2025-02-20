// Initialize Algolia Client
const searchClient = algoliasearch(
  "18ZO40UVWY", // Replace with your Algolia App ID
  "d3ee094323bd311dccdd54c7dbb933b6" // Replace with your Algolia Search API Key
);

// Initialize InstantSearch
const search = instantsearch({
  indexName: "users", // Make sure this matches your Algolia index
  searchClient,
});

// Add Search Box & Hits
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search users...",
  }),

  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
          <div class="ais-Hits-item">
            <h2>${hit.FirstName || "No First Name"}</h2>
            <p>${hit.Surname || "No Surname"}</p>
          </div>
        `;
      },
    },
  }),
]);

// Start Search
search.start();
