const formulario = document.forms["form"]
const firstName = formulario.firstName
const lastName = formulario.lastName
const email = formulario.email
const senha = formulario.password
const botao = document.querySelector('.botao')

botao.addEventListener('click',(event)=>{
    const elementos = [senha,lastName,firstName]
    console.log(elementos)
    event.preventDefault()
    botao.id
    const inputs = formulario.querySelectorAll('input')
    for (let i in inputs){
        function setarErros(displayMSG,displayIMG){
            inputs[i].parentNode.querySelector('.error').style.display = displayIMG
            inputs[i].parentNode.querySelector('.msgError').style.display = displayMSG
        }

        if (inputs[i].classList.contains('email')){
            function validadorEmail(email){
                let pesquisa = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
                return pesquisa.test(email)
            }

            if(validadorEmail(email.value)){
                setarErros('none','none')
            }else{
                setarErros('block','block')
            }
    
        }else if(inputs[i].classList.contains('password')){
            function validarSenha(senha){
                let validar =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                return validar.test(senha)
            }

            if(validarSenha(senha.value)){
                setarErros('none','none')
            }else{
                setarErros('block','block')
            }

        }else{
            if (inputs[i].value == ''){
               setarErros('block','block')
            }else{
                setarErros('none','none')
            }
        }
       
    }

    
})