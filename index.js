const searchClient = algoliasearch('18ZO40UVWY', 'd3ee094323bd311dccdd54c7dbb933b6'); // Replace API Key if needed

const search = instantsearch({
    indexName: 'your_index_name',  // Replace with your actual Algolia index name
    searchClient,
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchbox',
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: `
                <div>
                    <strong>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</strong>
                </div>
            `,
        },
    }),
]);

search.start();
