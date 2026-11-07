let etudiants = [
    {
        id: 1,
        nom: "Ahmed",
        age: 22,
        note: 15
    },
    {
        id : 2,
        nom : "sara",
        age : 44,
        note : 9
    },
    {
        id : 3,
        nom : "salim",
        age : 18,
        note : 10
    },
    {
        id : 4,
        nom : "anas",
        age : 18,
        note : 7
    },
    {
        id : 5,
        nom : "salma",
        age : 22,
        note : 12
    }
]

const divetudient = document.querySelector("#etudient")
const resultat = document.querySelector("#resultat")

function afichier(){
    divetudient.innerHTML = ""
    etudiants.forEach(etudiant =>{
        divetudient.innerHTML += `

        <p> Nom : ${etudiant.nom} ||| Age : ${etudiant.age} ||| Note : ${etudiant.note}
        </p>
        <button id="${etudiant.id}">supprimer</button>
        `
    })
}

function ajouter(){
const nom = document.getElementById("input-nom")
const age = document.getElementById("input-age")
const note = document.getElementById("input-note")
    const ajouterr = {
        id : etudiants.length + 1,
        nom : nom.value,
        age : Number(age.value),
        note : Number(note.value)
    }
        etudiants.push(ajouterr)

        afichier()
        nom.value = ""
        age.value = ""
        note.value = ""
}

function rechercher(){

    const chercherEtudient = document.querySelector("#input-chercher")
    let etud = etudiants.find(etud => etud.id === Number(chercherEtudient.value))
    
    document.querySelector("#afichagee").innerHTML = ``
    document.querySelector("#afichagee").innerHTML = `

        <p> Nom : ${etud.nom} ||| Age : ${etud.age} ||| Note : ${etud.note}
        </p>
        `
    afichier()
    chercherEtudient.value = ""

}
document.querySelector("#chercher").addEventListener("click", rechercher)

function supprimer(id){
    etudiants = etudiants.filter(etudient => etudient.id !== id)
    afichier()
}


document.querySelector("#etudient").addEventListener("click", (event)=>{
    const bouton = event.target.closest(`button`)

    if(!bouton) return;
    console.log(bouton)
    supprimer(Number(bouton.id))
})
document.querySelector("#aficher").addEventListener("click", afichier)

document.querySelector("#ajouter").addEventListener("click", ajouter)
