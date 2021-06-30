class Denuncia {
    tipo;
    mensagem;
    constructor(tipo, mensagem){
        this.tipo = tipo;
        this.mensagem = mensagem;
    }
}

function salvarDados(){
        mensagem = document.getElementById('txtd').value
        tipo = document.getElementById('denuncia').value
        let denuncia = new Denuncia(tipo, mensagem);
        armazenarDenuncia(denuncia);
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

}