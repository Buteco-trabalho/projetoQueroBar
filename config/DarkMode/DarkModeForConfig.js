let button = document.getElementById("darkmode");
let user = JSON.parse(sessionStorage.getItem('user'))
button.onclick = e => {
    if(button.checked){
        user.darkMode = true;
        sessionStorage.setItem("user", JSON.stringify(user))
    }
    else{
        user.darkMode = false
        sessionStorage.setItem("user", JSON.stringify(user))
    }
}