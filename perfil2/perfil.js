let bio = document.getElementById("bio");
let reader = new FileReader();
let user = JSON.parse(sessionStorage.getItem("user"));
let name = document.getElementById("userName").textContent = user.nome;
function Imagem() {
  let imagem = document.getElementById("upload").files[0];
  let preview = document.querySelector("#userImg");

  let reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };
  if (imagem) {
    reader.readAsDataURL(imagem);
  } else {
    preview.src = "";
  }
}
