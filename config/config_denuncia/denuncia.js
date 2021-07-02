class Denuncia {
    tipo;
    mensagem;
    email;
    constructor(tipo, mensagem, email){
        this.tipo = tipo;
        this.email = email;
        this.mensagem = mensagem;
    }
}

function salvarDados(){
        mensagem = document.getElementById('txtd').value
        email = document.getElementById("Email").value
        tipo = document.getElementById('denuncia').value
        let denuncia = new Denuncia(tipo, mensagem, email);
        armazenarDenuncia(denuncia);
        window.location.reload()
    }
function armazenarDenuncia(denuncia){
    let ArrayofDenuncias;
        if(localStorage.getItem("denuncias") == null){
        ArrayofDenuncias = {
            denuncias : []
        }
    } else {
        ArrayofDenuncias = JSON.parse(localStorage.getItem("denuncias"))
    }
    if(ArrayofDenuncias.id == null){
        ArrayofDenuncias.id = 1;
    }
    else {
        ArrayofDenuncias.id++;
    }
    denuncia._id = ArrayofDenuncias.id 
    ArrayofDenuncias
    .denuncias
    .push(denuncia)
    localStorage.setItem("denuncias", JSON.stringify(ArrayofDenuncias))
    window.load = () => {
        mensagem.value = ""
        email.value = ""
    }
}


