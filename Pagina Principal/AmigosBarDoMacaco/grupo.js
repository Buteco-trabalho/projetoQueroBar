class Chat{
    _id = 0
    getId = () => this._id++

    getMessage(){
        let messageValue = document.querySelector("input").value
        if (messageValue != false){
        this.storageMessage(messageValue, this.PrintMessage)
        }
    }
    storageMessage(message, next){
        let idMessage = this.getId()
        localStorage.setItem( idMessage ,JSON.stringify(message))
        next(message, idMessage)
    }
    PrintMessage(id){
        let message = JSON.parse(localStorage.getItem(id))
        let blockChat = document.querySelector('.mensagem-Body')
        let messageBlock = document.querySelector('.mensagem').cloneNode(true)
        let messagesValues = messageBlock.childNodes
        let MessageArray = [...messagesValues]
        MessageArray[3].textContent = message
        console.log(MessageArray[3])
        blockChat.appendChild(messageBlock)
    }

    PrintAllMessages(){
        for (let i = 0; i < this.getId(); i++){
        this.PrintMessage(i)
        }
    }
   

}


let chatBarDoMacaco = new Chat();


   
$("button").click(function(e) {
        e.preventDefault();
        chatBarDoMacaco.getMessage()
        window.scrollTo(0,document.body.scrollHeight);
})

