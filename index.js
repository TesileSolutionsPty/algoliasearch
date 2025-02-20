import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits, configure, poweredBy } from "instantsearch.js/es/widgets";

// Initialize Algolia
const searchClient = algoliasearch('18ZO40UVWY', 'd3ee094323bd311dccdd54c7dbb933b6');

const search = instantsearch({
  indexName: 'users',
  searchClient,
});

// Add search widgets
search.addWidgets([
  searchBox({
    container: "#searchbox",
    placeholder: "Search for products...",
  }),
  hits({
    container: "#hits",
    templates: {
      item: (hit) => `
        <div>
          <strong>${hit.name}</strong><br>
          ${hit.description}
        </div>
      `,
    },
  }),
  poweredBy({
    container: "#algolia-footer",
  }),
]);

search.start();
