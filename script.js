const boxRegister = document.getElementById("box-register")
const boxLogin = document.getElementById("box-login")

const passwordLogin = document.getElementById("password-login")
const formLogin = document.getElementById("form-login")
const emailLogin = document.getElementById("email-login")
const errorLogin = document.getElementById("error-login")

const passwordRegister = document.getElementById("password-register")
const formRegister = document.getElementById("form-register")
const emailRegister = document.getElementById("email-register")
const date = document.getElementById("date")
const name = document.getElementById("name")
const surname = document.getElementById("surname")
const errorRegister = document.getElementById("error-register")


formLogin.addEventListener("submit", (e) => {
    let messagesLogin = []

    if (passwordLogin.value.length <= 6) {
        messagesLogin.push("Password must be longer than 6 characters")
    }

    if (passwordLogin.value.length >= 20) {
        messagesLogin.push("Password must be less than 20 characters")
    }

    if (messagesLogin.length > 0) {
        e.preventDefault()
        errorLogin.innerText = messagesLogin.join(", ")
    }
})

formRegister.addEventListener("submit", (e) => {
    let messagesRegister = []

    if (passwordRegister.value.length <= 6) {
        messagesRegister.push("Password must be longer than 6 characters")
    }

    if (passwordRegister.value.length >= 20) {
        messagesRegister.push("Password must be less than 20 characters")
    }

    if (messagesRegister.length > 0) {
        e.preventDefault()
        errorRegister.innerText = messagesRegister.join(", ")
    }
})

function showRegisterBox() {
    boxRegister.style.opacity = "100%"
    boxRegister.style.transform = "translateY(0px)"
    boxLogin.style.opacity = "0"
    boxLogin.style.transform = "translateY(20px)"
    boxRegister.style.zIndex = "1"
    boxLogin.style.zIndex = "0"
    errorLogin.innerText = ""
    clearLoginFields(emailLogin, passwordLogin)
}

function showLoginBox() {
    boxRegister.style.opacity = "0"
    boxRegister.style.transform = "translateY(20px)"
    boxLogin.style.opacity = "100%"
    boxLogin.style.transform = "translateY(0px)"
    boxRegister.style.zIndex = "0"
    boxLogin.style.zIndex = "1"
    errorRegister.innerText = ""
    clearLoginFields(emailRegister, passwordRegister, name, surname, date)
}

function clearLoginFields(email, password, name, surname, date) {
    email.value = ""
    password.value = ""
    name.value = ""
    surname.value = ""
    date.value = ""

}