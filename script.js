//relações
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@-_";
let novaSenha = " ";
//sliderElement.value -> quantidade de caracteres que o usuário selecionou
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput= function(){
    sizePassword.innerHTML = this.value
}

//função -> botão Gerar Senha
function generatePassword(){
    //alert ("Vamos gerar a senha")
    let pass = "";

    //contador/freio para chegar no número de caracteres
    for(let i = 0, c = charset.length; i < sliderElement.value; ++i){
    // ++ para concatenar para a senha 
        pass += charset.charAt(Math.floor(Math.random()*c));
    }
    //console.log(pass);
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Copiado!")
    navigator.clipboard.writeText(novaSenha);
}