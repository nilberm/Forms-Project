// document.querySelector("form").addEventListener("submit", event => {
//     console.log("enviar o formulário")
//     event.preventDefault()
// })

// -------------- Email Validation -----------------
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

// ----------------- Name requerid ------------------

const nameInput = document.getElementById("name")
const nameFlag = document.getElementById("nameFlag")

function validationName(){
    if(nameInput.value == ""){
        nameInput.classList.add("error")
        nameFlag.style.display = "block"
    }else nameInput.classList.remove("error")
}

function resetName(){
    if(nameFlag.style.display == "block"){
        nameFlag.style.display = "none"
    }
}

// ------------- Last Name required ----------------

const last = document.getElementById("last")
const lastFlag = document.getElementById("lastFlag")

function validationLast(){
    if(last.value == ""){
        last.classList.add("error")
        lastFlag.style.display = "block"
    } else last.classList.remove("error")
}

function resetLast(){
    if(lastFlag.style.display == "block"){
        lastFlag.style.display = "none"
    }
}

// ------------- Password required -----------------

const pass = document.getElementById("password")
const passFlag = document.getElementById("passwordFlag")

function validationPass(){
    if(pass.value == ""){
        pass.classList.add("error")
        passFlag.style.display = "block"
    } else pass.classList.remove("error")
}

function resetPass(){
    if(passFlag.style.display == "block"){
        passFlag.style.display = "none"
    }
}