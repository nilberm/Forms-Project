var email = document.getElementById('email')
var emailFlag = document.getElementById("emailFlag")

function validationEmail(){
    

    if(!email.checkValidity()){
        if(email.classList) email.classList.add("error")
          emailFlag.style.display = "block"
    }else email.classList.remove("error")
}

function resetMsg(){
    if(emailFlag.style.display == "block"){
        emailFlag.style.display = "none"
    }
}

var nameInput = document.getElementById("name")

function validationName(){
    if("nameInput" == " "){
        if(nameInput.classList) nameInput.classList.add("error")
        nameInput.style.display = "block"
    }else nameInput.classList.remove("error")
}