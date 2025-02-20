// Initialize Algolia client
const searchClient = algoliasearch("18ZO40UVWY", "d3ee094323bd311dccdd54c7dbb933b6");

// Initialize InstantSearch.js
const search = instantsearch({
    indexName: "users",
    searchClient,
});

// Add widgets
search.addWidgets([
    instantsearch.widgets.searchBox({
        container: "#searchbox",
    }),

    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            item: (hit) => `<div>${hit.name}</div>`, // Adjust based on your data
        },
    }),
]);

// Start the search
search.start();

