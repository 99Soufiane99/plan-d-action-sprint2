let produite = [
    {
        nome : "table",
        prix : 200,
        quantite : 3,
    },
    {
        nome : "quasque",
        prix : 400,
        quantite : 5,
    },
    {
        nome : "casquet",
        prix : 500,
        quantite : 9,
    }
]



const divproduit = document.querySelector("#produit")
const mentanttotal = document.querySelector("#mentantfinal")
let total = 0
produite.forEach( produite=>{
    divproduit.innerHTML +=`
     <p>produit : ${produite.nome} || prix : ${produite.prix} DH</p>
        <p>contite : ${produite.quantite}</p>
    `
    total += produite.prix * produite.quantite

})
let reduction = 0
if(total > 500){
    reduction = ((total * 10) / 100)
}

mentanttotal.innerHTML = `
    <p>prix : ${total} DH</p>
    <p>reduction 10% : ${total - reduction} DH</p>

`



