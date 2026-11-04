let note = [10, 19, 12, 9, 5, 11, 12, 8]


function moyendeclass(){
    let monyen = 0
for(let i = 0; i < note.length; i++){
    monyen += note[i]
}
return monyen / note.length
}

function meilleurenote(){
    let meileurnot = note[0]
    for(let i = 0; i < note.length; i++){
        if(note[i] > meileurnot){
            meileurnot = note[i]
        }
    }
    return meileurnot;
}

function notsuperieur(){
    let notmoyen = 0
    for(let i = 0; i < note.length; i++){
        if(note[i] >= 10) notmoyen++;
    }
    return notmoyen;
}

function determine(){
    if(moyendeclass() >= 10) console.log("moyen de class superieur a 10")
}
determine()
console.log( `moyen de class : `,moyendeclass())
console.log("maileur not : ", meilleurenote())
console.log("les note moyen est : ", notsuperieur())