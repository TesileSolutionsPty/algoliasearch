// Use global variables from CDN
const searchClient = algoliasearch("18ZO40UVWY", "d3ee094323bd311dccdd54c7dbb933b6");

const search = instantsearch({
  indexName: "users",
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({ container: "#searchbox" }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: (hit) => `<div><strong>${hit.name}</strong><br>${hit.description}</div>`,
    },
  }),
]);

search.start();
