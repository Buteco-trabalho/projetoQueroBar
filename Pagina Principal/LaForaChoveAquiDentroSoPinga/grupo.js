function inicialize() {
  let LaForaChoveAquiDentroPinga = {
    messages: [],
    id: 0,
    ChatName: "La Fora Chove Aqui Dentro Pinga",
  };
  let groups = localStorage.getItem("groups");
  if (groups == null) {
    console.log("nao existe grupo");
    groups = [];
    groups.push(LaForaChoveAquiDentroPinga);
    localStorage.setItem("groups", JSON.stringify(groups));
  } else {
    groups = JSON.parse(groups);
    let existe = false;
    groups.forEach((e) => {
      if (e.ChatName == "La fora chove aqui dentro Pinga") {
        LaForaChoveAquiDentroPinga = e;
        existe = true
      }
    });
    if (!existe){
      groups.push(LaForaChoveAquiDentroPinga);
    }
  }
  function PrintAllMessages() {
    for (let i = 1; i <= LaForaChoveAquiDentroPinga.id; i++) {
      PrintMessage(i);
    }
  }
  function getMessage() {
    let messageValue = document.querySelector("input").value;
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (messageValue != false) {
      let messageObject = {
        User: user.emailornumber,
        messageBody: messageValue,
        id: LaForaChoveAquiDentroPinga.id + 1,
      };
      LaForaChoveAquiDentroPinga.id = messageObject.id;
      console.log(messageObject);
      storageMessage(messageObject, PrintMessage);
    }
  }
  function storageMessage(message, next) {
    LaForaChoveAquiDentroPinga.messages.push(message);
    localStorage.setItem("groups", JSON.stringify(groups));
    console.log(LaForaChoveAquiDentroPinga);
    next(message.id);
  }
  function PrintMessage(id) {
    let message;
    console.log(id)
    LaForaChoveAquiDentroPinga.messages.forEach((e) => {
      if (e.id == id) {
        message = e;
        console.log(message);
      }
    });
    let blockChat = document.querySelector(".mensagem-Body");
    let messageBlock = document.querySelector(".mensagem").cloneNode(true);
    let messagesValues = messageBlock.childNodes;
    let MessageArray = [...messagesValues];
    console.log(message)
    MessageArray[3].innerText = message.messageBody;
    MessageArray[1].text = message.User;
    blockChat.appendChild(messageBlock);
  }

  $("button").click(function (e) {
    e.preventDefault();
    getMessage();
    window.scrollTo(0, document.body.scrollHeight);
  });
  PrintAllMessages()
}
window.onload = inicialize();



// /home/luan/Downloads/projetoquero/projetoQueroBar/Pagina Principal/LaForaChoveAquiDentroPinga/grupo.js