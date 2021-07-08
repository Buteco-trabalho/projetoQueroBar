function inicialize() {
  let AmigosBarDoMacaco = {
    messages: [],
    id: 0,
    ChatName: "amigos Bar Do Macaco",
  };
  let groups = localStorage.getItem("groups");
  if (groups == null) {
    console.log("nao existe grupo");
    groups = [];
    groups.push(AmigosBarDoMacaco);
    localStorage.setItem("groups", JSON.stringify(groups));
  } else {
    groups = JSON.parse(groups);
    let existe = false;
    groups.forEach((e) => {
      if (e.ChatName == "amigos Bar Do Macaco") {
        AmigosBarDoMacaco = e;
        existe = true
      }
    });
    if (!existe){
      groups.push(AmigosBarDoMacaco);
    }
  }
  function PrintAllMessages() {
    for (let i = 1; i <= AmigosBarDoMacaco.id; i++) {
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
        id: AmigosBarDoMacaco.id + 1,
      };
      AmigosBarDoMacaco.id = messageObject.id;
      console.log(messageObject);
      storageMessage(messageObject, PrintMessage);
    }
  }
  function storageMessage(message, next) {
    AmigosBarDoMacaco.messages.push(message);
    localStorage.setItem("groups", JSON.stringify(groups));
    console.log(AmigosBarDoMacaco);
    next(message.id);
  }
  function PrintMessage(id) {
    let message;
    console.log(id)
    AmigosBarDoMacaco.messages.forEach((e) => {
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



// /home/luan/Downloads/projetoquero/projetoQueroBar/Pagina Principal/AmigosBarDoMacaco/grupo.js