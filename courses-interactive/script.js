let article = []
const input = document.querySelector("#input")
const btAjouter = document.querySelector("#ajouter")
const divarticle = document.querySelector("#article")
function ajouter(){
    const exist = article.some(art => art.title === input.value)
    if(input.value === "" || exist) return ;
    
    ar = {
        title : input.value,
        id : article.length
    }
    article.push(ar)
    afichier()
    input.value = ``
}
function afichier(){
    divarticle.innerHTML = ``;

    article.forEach(art =>{
        divarticle.innerHTML += `<div> titre : ${art.title}
                                <button id="${art.id}">suprimer</button>
                                </div>
                                `
    })
}
function suprimer(id){
   article = article.filter(art => art.id !== id)
   afichier()
}
divarticle.addEventListener("click", event =>{
    const id = Number(event.target.id)
    suprimer(id)
    console.log(article)
    // if(article.find(n=> n.id === id)) return;

})
btAjouter.addEventListener("click", ajouter)