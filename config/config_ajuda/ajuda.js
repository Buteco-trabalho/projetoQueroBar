class Sugestao {
  mensagem;
  email;
  constructor(mensagem, email) {
    this.email = email;
    this.mensagem = mensagem;
  }
}

function salvarDados() {
  let mensagem = document.getElementById("txtd").value;
  let email = document.getElementById("Email").value;
  let sugestao = new Sugestao(mensagem, email);
  armazenarSugestao(sugestao);
  window.location.reload()
}
function armazenarSugestao(sugestao) {
  let ArrayofSugestoes;
  if (localStorage.getItem("Sugestao") == null) {
    ArrayofSugestoes = {
      Sugestao: [],
    };
  } else {
    ArrayofSugestoes = JSON.parse(localStorage.getItem("Sugestao"));
  }
  if (ArrayofSugestoes.id == null) {
    ArrayofSugestoes.id = 1;
  } else {
    ArrayofSugestoes.id++;
  }
  sugestao._id = ArrayofSugestoes.id;
  ArrayofSugestoes.Sugestao.push(sugestao);
  localStorage.setItem("Sugestao", JSON.stringify(ArrayofSugestoes));
}
window.onload = () => {
  let mensagem = document.getElementById("txtd").value = "";
  let email = document.getElementById("Email").value = "";
};
