const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchinput");

const data = [
    { title: "Game 1", description: "Descrição do Jogo 1" },
    { title: "Game 2", description: "Descrição do Jogo 2" },
    { title: "Game 3", description: "Descrição do Jogo 3" }
];

const displayData = (data) => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>`;
    });
}

const filterData = (query) => {
    return data.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase())
    );
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    const filteredData = filterData(query);
    displayData(filteredData);
});

window.addEventListener("load", () => displayData(data));

