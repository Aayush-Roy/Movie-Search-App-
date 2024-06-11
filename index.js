
const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
let cont = document.querySelector(".containers");

const get = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        fetchdata(data.results);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const fetchdata = (data) => {
    cont.innerHTML = ""; // Clear previous content
    data.forEach((element) => {
        cont.innerHTML += `
            <div class="items">
                <div class="imgEl">
                    <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="">
                </div>
                <div class="title">
                    <h3>${element.title}</h3>
                </div>
                <div class="date">
                    <p>Release Date:- ${element.release_date}</p>
                </div>
            </div>
        `;
    });
}

btn.addEventListener("click", async () => {
    let query = text.value.trim(); // Trim whitespace
    if (query !== "") { // Check if query is not empty
        const url = `https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=${query}`;
        try {
            let res = await fetch(url);
            let data = await res.json();
            fetchdata(data.results);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }
});

get();
