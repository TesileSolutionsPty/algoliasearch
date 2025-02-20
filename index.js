import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  searchBox,
  hits,
  configure,
  poweredBy,
} from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/reset.css";

// Initialize Algolia
const searchClient = algoliasearch("18ZO40UVWY", "d3ee094323bd311dccdd54c7dbb933b6");

const search = instantsearch({
  indexName: "users",
  searchClient,
});

// Add widgets
search.addWidgets([
  searchBox({
    container: "#searchbox",
  }),
  hits({
    container: "#hits",
    templates: {
      item: `
        <div class="ais-Hits-item">
          <picture>
            <img src="{{image}}" alt="{{name}}" />
          </picture>
          <div>
            <p class="primary-text">{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</p>
            <p class="secondary-text">{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
            <p class="tertiary-text">{{price}}</p>
          </div>
        </div>
      `,
    },
  }),
  configure({
    hitsPerPage: 10,
  }),
  poweredBy({
    container: "#algolia-footer",
  }),
]);

// Start the search
search.start();

// Add styles
const styles = document.createElement("style");
styles.textContent = `
  .ais-InstantSearch {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 0 #0000, 0 0 #0000, 0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 1px 3px 0px rgba(35, 38, 59, 0.15);
    background-color: rgb(255 255 255);
  }

  .ais-SearchBox-form {
    position: relative;
  }

  .ais-SearchBox-input {
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 14px 40px;
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    position: absolute;
    top: 0;
    height: 100%;
    background: none;
    border: none;
    appearance: none;
  }

  .ais-SearchBox-submit {
    left: 0;
    width: 40px;
  }

  .ais-SearchBox-reset {
    right: 12px;
  }

  .ais-Hits-item {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    box-shadow: none;
  }

  .ais-Hits-item picture  {
    height: 96px;
    width: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ais-Hits-item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .ais-Hits-item p {
    margin-bottom: 0.1rem;
    word-break: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .ais-Hits-item .secondary-text {
    -webkit-line-clamp: 2;
  }

  .ais-Hits-item .primary-text {
    margin-top: 0;
    font-weight: 700;
  }

  .ais-Hits-item .tertiary-text {
    font-size: 0.8rem;
    color: rgb(90, 94, 154);
  }

  .ais-Hits-item mark {
    color: #003dff;
    background-color: #f2f4ff;
    font-style: normal;
  }

  .ais-SearchBox-submitIcon {
    width: 15px;
    height: 15px;
  }

  .border-top {
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
    border-color: rgb(214 214 231);
  }

  #hits {
    padding: 1rem;
  }

  #algolia-footer {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }

  .hide-content {
    display: none !important;
  }
`;
document.head.appendChild(styles);
