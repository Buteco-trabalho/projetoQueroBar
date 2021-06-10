class Validator {
    constructor(){
        this.validations = [
            'data-required',
            'data-emailornumber-validate',
            'data-password-validate',
            'data-verify',
            'data-verify-password'
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
                    console.log(method)
                    this[method](input, value)
                }
            }
        }, this)
    }
 
    // imprime a mensagem de erro no HTML!
    printMessage(input, message){

        // verifica quantidade de erros

        let errorQty = input.parentNode.querySelector('.error')

        if (errorQty === null){
            let template = document.querySelector('.error').cloneNode(true);
            console.log(document.querySelector(".error"))
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
        console.log(input.parentNode)
        let inputValue = input.value;
        if (inputValue == false){
            let errorMessage = `este campo é obrigatório!`

            this.printMessage(input, errorMessage)
        }

    }
    verify(input){
        let inputValue = input.value
        let user = JSON.parse(localStorage.getItem(inputValue))
        let errorMessage = 'email ou numero não encontrado.' 
        if(user == null){
            this.printMessage(input, errorMessage)
        }
    }
    verifypassword(input){
        let userobject = document.getElementById('user').value
        let user = JSON.parse(localStorage.getItem(userobject))
        let errorMessage = 'senha inválida!'
        if(input.value != user.senha){
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
                input.style.filter = "none"
                input.style.borderRadius = '5px 5px 0px 0px' 
                input.style.borderBottom = 'solid 1px black'
            }
            else {
                input.style.borderRadius = '5px' 
                input.style.borderBottom = '0px'
            }
        })
}


let validator = new Validator()


let form = document.getElementById('formulario')
let submit = document.getElementById('login')

submit.addEventListener('click', function(e){

    e.preventDefault();
    validator.validate(form)
    let currentValidations = document.querySelectorAll('form div .error')
    resetStyle();
    arrayofvalidations = [...currentValidations]
    if(arrayofvalidations.length == 0){
        window.location.href = "../Pagina Principal/index.html"
    }
})
