//Validação do formulário
function validateForm(){
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let errorMessage= document.getElementById("errorMessage");
   if(                ){
        errorMessage.textContent="Campo de nome Obrigatório.";
        return false;
    }
    if(           ){
        errorMessage.textContent="Email inválido.";
        return false;
    }
    if(password <6){
        errorMessage.textContent

    }
}