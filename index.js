import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits, configure } from "instantsearch.js/es/widgets";

// 🔹 Replace these with your Algolia credentials
const searchClient = algoliasearch("18ZO40UVWY", "d3ee094323bd311dccdd54c7dbb933b6");

const search = instantsearch({
  indexName: "users", // 🔹 Replace "users" with your actual index name
  searchClient
});

// Search Box
search.addWidgets([
  searchBox({
    container: "#searchbox",
    placeholder: "Search for users..."
  }),

  hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
          <div class="ais-Hits-item">
            <h2>${hit.FirstName || "No Name"}</h2>
            <p>${hit.Surname || "No Surname"}</p>
          </div>
        `;
      }
    }
  }),

  configure({
    hitsPerPage: 10
  })
]);

search.start();
