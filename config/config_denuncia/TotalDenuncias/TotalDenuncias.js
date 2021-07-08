function carregarDenuncias (){
    let tela = document.getElementById("denuncias")
    let denuncias = JSON.parse(localStorage.getItem("denuncias"))
    console.log(denuncias)
    tela.innerHTML = ""
    for (let i = 0; i < denuncias.id; i++){
        let email = denuncias.denuncias[i].email
        let mensagem = denuncias.denuncias[i].mensagem
        let tipo = denuncias.denuncias[i].tipo
        tela.innerHTML += `
        <div class="card col-md-3">
                <div class="card-body">
                    <h5 class="card-title">${email}</h5>
                    <h6 class="card-title">${tipo}</h6>
                    <p class="card-text">${mensagem}</p>
                    <a href="#" class="btn btn-primary">Responder</a>
                </div>
            </div>
        `
    } 
}
window.onload = carregarDenuncias