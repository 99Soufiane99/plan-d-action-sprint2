const divcart = document.querySelector("#divcart")
const btnBlue = document.querySelector(".btn-blue")
const btnGreen = document.querySelector(".btn-green")
const btnRed = document.querySelector(".btn-red")
const btnAm = document.querySelector("#btn-am")

btnBlue.addEventListener("click", ()=>{
    divcart.className = "p-3 rounded-xl border m-5 w-[200px] h-[200px] bg-blue-200"

})

btnGreen.addEventListener("click", ()=>{
    divcart.className = "p-3 rounded-xl border m-5 w-[200px] h-[200px] bg-green-200"
})

btnRed.addEventListener("click", ()=>{
    divcart.className = "p-3 rounded-xl bg-red-200 border m-5 w-[200px] h-[200px]"
})

btnAm.addEventListener("click", ()=>{
    divcart.classList.toggle("hidden")
})
