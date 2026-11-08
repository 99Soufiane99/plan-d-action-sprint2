const augmenter = document.querySelector("#Augmenter")
const diminuer = document.querySelector("#Diminuer")
const conteur = document.querySelector("#conteur")
const renitialiser = document.querySelector("#renitialiser")
let conter = 0;
function checkcolor(){
if(conter >= 10) augmenter.style.color = "red" ;
else{augmenter.style.color = "black";}

}
augmenter.addEventListener("click", event =>{
    conter++;
    checkcolor()
   conteur.textContent = conter;
})

diminuer.addEventListener("click", event =>{
    if(conter <= 0) return;
    conter--;
    checkcolor()
    conteur.textContent = conter;
})

renitialiser.addEventListener("click", event =>{
    conter = 0;
    checkcolor()
    conteur.textContent = conter;
})