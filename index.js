const searchClient = algoliasearch("18ZO40UVWY", "d3ee094323bd311dccdd54c7dbb933b6");

const search = instantsearch({
    indexName: "users",
    searchClient
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Search for users..."
    }),

    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            item: (hit) => `
                <div class="ais-Hits-item" onclick="openModal('${hit.FirstName}', '${hit.Surname}', '${hit.Email}', '${hit.profilePicture || 'default-avatar.png'}')">
                    <img src="${hit.profilePicture || 'default-avatar.png'}" alt="Profile Picture">
                    <div>
                        <h2>${hit.FirstName} ${hit.Surname}</h2>
                        <p>${hit.Email}</p>
                    </div>
                </div>
            `
        }
    })
]);

search.start();

// Modal Functions
function openModal(firstName, surname, email, profilePicture) {
    document.getElementById("modalProfilePicture").src = profilePicture;
    document.getElementById("modalName").textContent = `${firstName} ${surname}`;
    document.getElementById("modalEmail").textContent = email;
    document.getElementById("userModal").style.display = "block";
}

function closeModal() {
    document.getElementById("userModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("userModal");
    if (event.target === modal) {
        closeModal();
    }
};
