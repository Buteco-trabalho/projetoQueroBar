class Validator {
    constructor(){
        this.validations = [
            'data-required',
            'data-min-length',
            'data-letters',
            'data-emailornumber-validate',
            'data-equal',
            'data-password-validate',
            'data-majority',
        ]
    }


    validate(form){
        
        // resgata todas as validações 
        let currentValidations =  document.querySelectorAll('form div .error')
        if (currentValidations.length > 0){
            this.cleanValidations(currentValidations);
        }

        // pegar os formularios 
        let inputs = form.getElementsByTagName('input')

        // HTMLCollection -> array 
        let arrayOfInputs = [...inputs]

        // loop nos inputs e validacão no que foi encontrado.
        arrayOfInputs.forEach(input => {

            // loop em todas as validacoes existentes
            for (let i = 0; i < this.validations.length; i++){

                // verifica se a validação atual existe no input.
                if (input.getAttribute(this.validations[i]) != null){
                    

                    // limpando as strings para virar um metodo!
                    let method = this.validations[i].replace('data-', '').replace('-','')

                    // valor do input
                    let value = input.getAttribute(this.validations[i])

                    // invoca o metodo
                    this[method](input, value)
                }
            }
        }, this)
    }
     
    //verifica se um input tem um minimo de caracteres!
    minlength(input, minValue)
    {
        let inputLength =  input.value.length

        let errorMessage = `o campo precisa ter no minimo ${minValue} caracteres!`

        if(minValue > inputLength){
            this.printMessage(input, errorMessage)
        }
    }

    // aceita somente somente letras!!
    letters(input){
        let re = /^[a-zA-z]+$/
        let Inputvalue = input.value;

        let errorMessage = `este campo não aceita numeros ou valores especiais!`

        if(!re.test(Inputvalue)){
            this.printMessage(input, errorMessage)
        }
    }

    // confere se as senhas são iguais
    equal(input, inputName){
        let inputToCompare = document.getElementsByName(inputName)[0]

        let errorMessage = `este campo precisa estar igual ao ${inputName}`

        if (input.value != inputToCompare.value){

            this.printMessage(input, errorMessage)
        }
    }

    // aumenta a força da senha!

    passwordvalidate(input){
        if (input.value > 0){
            let charArr = input.value.split("");
            let uppercase = 0;
            let numbers = 0;

            for(let i = 0; i < charArr.length; i++){
                if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))){
                    uppercase++;
                }
                else if (charArr[i] === !isNaN(parseInt(charArr))){
                    numbers++;
                }   
            }
            
            if(uppercase === 0 || numbers === 0){
                let errorMessage = `a senha precisa de, no minimo, 1 caractere maiúsculo e 1 numero`

                this.printMessage(input, errorMessage)
            }
        }
    }
    // confere se a pessoa e maior de idade 
    majority(input){
        if(document.querySelector('#majority:checked') == null){
            let errorMessage = `o site so aceita usuários acima de 18 anos!`

            this.printMessage(input, errorMessage)
        }
    }

    // valida emails ou numeros de telefone
    emailornumbervalidate(input){

        // regex email
        let re =  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        // regex numero
        let re2 = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

        let emailornumber = input.value;

        let errorMessage = `Por favor, insira um email ou numero de telefone valido!`

        if(re2.test(emailornumber) || re.test(emailornumber)){

        }
        else {
            this.printMessage(input, errorMessage)
        }


    }   
    // imprime a mensagem de erro no HTML!
    printMessage(input, message){

        // verifica quantidade de erros

        let errorQty = input.parentNode.querySelector('.error')
        

        if (errorQty === null){
            let template = document.querySelector('.error').cloneNode(true);

            template.textContent = message;

            let inputParent = input.parentNode;

            template.classList.remove('template')

            inputParent.appendChild(template)

            // modificação de estilos!
            template.style.backgroundColor = "orange";
            template.style.color = 'black'
            template.style.fontWeight = 'bold'
            template.style.boxShadow = '0px 4px 4px  rgba(0, 0, 0, 0.6)'
        }
    }
    // verifica se o input é o requerido 

    required(input) {

        let inputValue = input.value;
        if (inputValue == false){
            let errorMessage = `este campo é obrigatório!`

            this.printMessage(input, errorMessage)
        }

    }
    // limpa as validacoes da tela
    cleanValidations(validations){
        validations.forEach(e => e.remove())
    }
}

     // reseta o estilo
     function resetStyle(){
        let allDivForms = document.querySelectorAll('.poEr')
        let ar =[...allDivForms]
        ar.forEach(e => {
                let input = e.querySelector('input')
                if (e.childElementCount == 2){
                input.style.borderRadius = '5px 5px 0px 0px' 
                input.style.borderBottom = 'solid 1px black'
            }
            else {
                input.style.borderRadius = '5px' 
                input.style.borderBottom = '0px'
            }
        })
    }
    
    function createUser(user) {
        localStorage.setItem( user.emailornumber, JSON.stringify(user))
        window.location.href = "../Pagina Principal/index.html"
    }

let validator = new Validator()


let form = document.getElementById('form-reg')
let submit = document.getElementById('cadastro')

function armazenaSessao(){
    let inputVal = document.getElementById('emailornumber').value
    let user = localStorage.getItem(inputVal)
    sessionStorage.setItem("user", user)
    console.log(user)
    console.log(sessionStorage)
}

submit.addEventListener('click', function(e){

    e.preventDefault();
    validator.validate(form)
    let currentValidations = document.querySelectorAll('form div .error')
    resetStyle()
    arrayofvalidations = [...currentValidations]
    if (arrayofvalidations.length === 0){   
        createUser({
            nome : document.getElementById("Name").value,
            emailornumber : document.getElementById('emailornumber').value,
            senha : document.getElementById('password').value,
            sistemaOperacional: navigator.platform,
            navegador: navigator.userAgent,
            linguagem: navigator.language
        })
        armazenaSessao()
    }
})