function cadastreSe (){
    window.location.href = "../Cadastre-se/cadastre-se.html"
}
function login (){
    window.location.href = "../Login/login.html"
}
let form = document.getElementById("cadastre-se")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    cadastreSe()
})