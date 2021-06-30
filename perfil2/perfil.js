let bio = document.getElementById("bio");
let inputBio = document.getElementById("inputBio");
let editar = document.getElementById("Edit");
// let reader = new FileReader();
let user = JSON.parse(sessionStorage.getItem("user"));
let users = JSON.parse(localStorage.getItem("users"));
console.log(users.clients);
let nome = document.getElementById("userName");
let pBio = document.getElementById("pBio");
window.onload = () => {
  nome.textContent = user.nome;
  if (user.bio != null) {
    pBio.textContent = user.bio;
    bio.style.display = "none";
    pBio.style.display = "block";
    editar.style.display = "inline";
  }
};

bio.addEventListener("submit", (e) => {
  e.preventDefault();
  user.bio = inputBio.value;
  pBio.textContent = inputBio.value;
  users.clients.forEach((e) => {
    if (user.emailornumber == e.emailornumber) {
      e.bio = user.bio;
    }
  });
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("user", JSON.stringify(user));
  bio.style.display = "none";
  pBio.style.display = "block";
  editar.style.display = "inline";
});
editar.addEventListener("click", (e) => {
  e.preventDefault();
  pBio.style.display = "none";
  bio.style.display = "block";
  editar.style.display = "none";
});

// function toBase64String(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//   var dataURL = canvas.toDataURL(imagem);
//   return dataURL;
// }
// function Imagem() {
//   let imagem = document.getElementById("upload").files[0];
//   let preview = document.querySelector("#userImg");
//   let reader = new FileReader();

//   reader.onloadend = function () {
//     preview.src = reader.result;
//   };
//   if (imagem) {
//     reader.readAsDataURL(imagem);
//     localStorage.setItem("minha-imagem", toBase64String(imagem));
//   } else {
//     preview.src = "";
//   }
// }
