let article = []
const input = document.querySelector("#input")
const btAjouter = document.querySelector("#ajouter")

function ajouter(){
    if(input.value === "") return ;
    else if(article.find(input.value)) return;
    ar = {
        title : input.value,
        id : article.length
    }
    article.push(ar)
    console.log(ar)
    console.log(article)
}


btAjouter.addEventListener("click", ajouter)