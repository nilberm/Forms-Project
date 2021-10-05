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
