class Chat{
    _id = 0
    verifyOthersMessages(){
        let storageID = localStorage.getItem("ID")
        if(storageID > this._id){
            return this._id = storageID
        }
    }
    getId = () => {
        this.setId(this._id)
        return this._id++
    }

    setId(number){
        localStorage.setItem("ID", number)
    }

    getMessage(){
        let messageValue = document.querySelector("input").value
        let user = JSON.parse(sessionStorage.getItem("user"))
        if (messageValue != false){
            let messageObject = {
                User : user.nome,
                messageBody: messageValue
            }
        this.storageMessage(messageObject, this.PrintMessage)
        }
    }
    storageMessage(message, next){
        let idMessage = this.getId()
        localStorage.setItem( idMessage ,JSON.stringify(message))
        console.log(message)
        next(idMessage)
    }
    PrintMessage(id){
        let message = JSON.parse(localStorage.getItem(id))
        let blockChat = document.querySelector('.mensagem-Body')
        let messageBlock = document.querySelector('.mensagem').cloneNode(true)
        let messagesValues = messageBlock.childNodes
        let MessageArray = [...messagesValues]
        MessageArray[3].innerText = message.messageBody
        MessageArray[1].text = message.User
        blockChat.appendChild(messageBlock)
    }

    
}
function PrintAllMessages(){
    for (let i = 0; i <= localStorage.getItem('ID'); i++){
    chatBarDoMacaco.PrintMessage(i)
    }
}

let chatBarDoMacaco = new Chat();
$(document).ready(e => {
    chatBarDoMacaco.verifyOthersMessages()
    PrintAllMessages()
})
   
$("button").click(function(e) {
        e.preventDefault();
        chatBarDoMacaco.getMessage()
        window.scrollTo(0,document.body.scrollHeight);
})

