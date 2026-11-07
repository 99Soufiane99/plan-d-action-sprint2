let produit = [
    {
        id : 1,
        nom : "t-shert",
        prix : 200,
        categorie : "vetements"
    },
    {
        id : 2,
        nom : "casque",
        prix : 500,
        categorie : "informatique"
    },
    {
        id : 3,
        nom : "clavier",
        prix : 300,
        categorie : "informatique"
    },
    {
        id : 4,
        nom : "short",
        prix : 100,
        categorie : "vetements"
    },
    {
        id : 5,
        nom : "pc portable",
        prix : 2000,
        categorie : "informatique"
    },
    {
        id : 6,
        nom : "casquette",
        prix : 70,
        categorie : "vetements"
    }
]

    const divproduit = document.querySelector("#produit")
    const divchercher = document.querySelector("#divchercher")
    const btchercher = document.querySelector("#btchercher")
    const divnom = document.querySelector("#afich-nom")
    let moinde = produit.filter(p => p.prix < 200)
    let justnom = produit.map(n => n.nom)
    console.log(justnom)

    function afichier(){
        divproduit.innerHTML = ``
        produit.forEach(p => {
            divproduit.innerHTML += `
            <p>produit : ${p.id} ||| nom : ${p.nom} ||| prix : ${p.prix} DH ||| categorie : ${p.categorie}
            `
        })
           moinde.forEach(p => {
                divproduit.innerHTML += `
                <p> les produits à moins de 200 DH : ${p.nom} || prix : ${p.prix} DH </p>
                `
            })
    }
    function chercher(){
        let input = document.querySelector("#cherche-id")
        let chercher = produit.find(p => p.id === Number(input.value))
        divchercher.innerHTML = ``
        console.log(chercher)
            divchercher.innerHTML += `
            <p>nom : ${chercher.nom}</p>
            `
        }
    function num(){
        let nom = produit.map(n=> n.nom)
        let som = produit.reduce((total, produit) =>{
            return total + produit.prix
        }, 0)
        divnom.innerHTML = ``
        nom.forEach(n =>{
            divnom.innerHTML =`
            <p>nom : ${nom} </p>
            <p>  prix de tous les produits : ${som} DH</p>
            `
        })
    }
    num()
    btchercher.addEventListener("click", chercher)

    afichier()




