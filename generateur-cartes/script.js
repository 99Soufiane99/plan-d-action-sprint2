let livres = [
    {
        titre : "livre 1",
        auteur : "auteur livre 1",
        prix : 50
    },
    {
        titre : "livre 2",
        auteur : "auteur livre 2",
        prix : 60
    },
    {
        titre : "livre 3",
        auteur : "auteur livre 3",
        prix : 40
    }
]


const divlivre = document.querySelector("#list-livre")
const nombrelivre = document.querySelector("#nombre-livre")

function afichier(){

    divlivre.innerHTML = ``
livres.forEach(livre =>{
    
    divlivre.innerHTML += `
        <div class="livrecard">
        <h2>${livre.titre}</h2>
        <h3>${livre.auteur}</h3>
        <p>${livre.prix}</p>
        </div>
        
    `
})
nombrelivre.textContent = ` nombre total de livres : ${livres.length} livre`
}
afichier()