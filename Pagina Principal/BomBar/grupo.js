function inicialize() {
  let BomBar = {
    messages: [],
    id: 0,
    ChatName: "Bom Bar",
  };
  let groups = localStorage.getItem("groups");
  if (groups == null) {
    console.log("nao existe grupo");
    groups = [];
    groups.push(BomBar);
    localStorage.setItem("groups", JSON.stringify(groups));
  } else {
    groups = JSON.parse(groups);
    let existe = false;
    groups.forEach((e) => {
      if (e.ChatName == "Bom Bar") {
        BomBar = e;
        existe = true
      }
    });
    if (!existe){
      groups.push(BomBar);
    }
  }
  function PrintAllMessages() {
    for (let i = 1; i <= BomBar.id; i++) {
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
        id: BomBar.id + 1,
      };
      BomBar.id = messageObject.id;
      console.log(messageObject);
      storageMessage(messageObject, PrintMessage);
    }
  }
  function storageMessage(message, next) {
    BomBar.messages.push(message);
    localStorage.setItem("groups", JSON.stringify(groups));
    console.log(BomBar);
    next(message.id);
  }
  function PrintMessage(id) {
    let message;
    console.log(id)
    BomBar.messages.forEach((e) => {
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



// /home/luan/Downloads/projetoquero/projetoQueroBar/Pagina Principal/BomBar/grupo.js