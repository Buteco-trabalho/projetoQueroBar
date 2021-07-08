let bio = document.getElementById("bio");
let inputBio = document.getElementById("inputBio");
let editar = document.getElementById("Edit");
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


document.getElementById("arquivo").addEventListener("change", function () {
  let reader = new FileReader();

  reader.addEventListener("load", () => {
    let imagem = reader.result;
    if (imagem) {
      document.getElementById("userImg").setAttribute("src", imagem)
      user.imagem = imagem
      sessionStorage.setItem("user", JSON.stringify(user));
      users.clients.forEach((e) => {
        if (user.emailornumber == e.emailornumber) {
          e.imagem = user.imagem;
        }
      });
      localStorage.setItem("users", JSON.stringify(users))

    }
  })
  

  reader.readAsDataURL(this.files[0])
})

document.addEventListener("DOMContentLoaded", () => {
  let imagem = user.imagem

  if (imagem) {
    document.getElementById("userImg").setAttribute("src", imagem)
  }
})

