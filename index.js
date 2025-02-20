import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  searchBox,
  hits,
  configure,
  poweredBy,
} from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/reset.css";

// Initialize Algolia search client
const searchClient = algoliasearch("18ZO40UVWY", "d3ee094323bd311dccdd54c7dbb933b6");

const search = instantsearch({
  indexName: "users",
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
    placeholder: "Search for products...",
  }),

  configure({
    hitsPerPage: 10,
  }),

  hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
          <div class="ais-Hits-item border-top">
            <picture>
              <img src="${hit.image || 'https://via.placeholder.com/96'}" alt="${hit.name}">
            </picture>
            <div>
              <p class="primary-text">${hit.name || "No Name Available"}</p>
              <p class="secondary-text">${hit.description || "No Description Available"}</p>
              <p class="tertiary-text">$${hit.price || "N/A"}</p>
            </div>
          </div>
        `;
      },
    },
  }),

  poweredBy({
    container: "#algolia-footer",
  }),
]);

search.start();
