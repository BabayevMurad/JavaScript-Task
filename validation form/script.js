let login = document.querySelector('#login')
let password = document.querySelector('#password')
let email = document.querySelector('#email')
let button = document.querySelector('#button')

let loginCorrect = false
let passwordCorrect = false
let emailCorrect = false


login.addEventListener('input', (ev)=> {
    let login1 = ev.target.value

    let firtsLow = false

    if (login1.length > 0) {
        firtsLow = login1[0] === login1[0].toLowerCase()
    }

    let hasnumber = login1.split('').some((it) => Number.isInteger(parseInt(it)))

    let islong = login1.length > 8;

    if (firtsLow && !hasnumber && islong)
        loginCorrect = true;
    else 
        loginCorrect = false
})

password.addEventListener('input', (ev)=> {
    let password1 = ev.target.value

    let firtsLow = false

    if (password1.length > 0) {
        firtsLow = password1[0] === password1[0].toUpperCase()
    
    }
    let hasnumber = password1.split('').some((it) => Number.isInteger(parseInt(it)))

    let islong = password1.length > 8;

    if (firtsLow && hasnumber && islong)
        passwordCorrect = true
    else 
        passwordCorrect = false
})

email.addEventListener('input', (ev)=> {
    let email1 = ev.target.value

    let indexat = -1
    let indexdot = -1

    for(let i = 0; i < email1.length; i++) {
        if(email1[i] === '@') {
            indexat = i
            break;
        }
    }

    if(indexat > -1) {
        emailCorrect = true
    }
    else{
        emailCorrect = false
    }

    for(let j = indexat; j < email1.length; j++){
        if(email1[j] === '.') {
            indexdot = j
        }
    }

    if(indexdot > -1 && emailCorrect) {
        emailCorrect = true
    }
    else{
        emailCorrect = false
    }
})

function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}


document.querySelector('#loginForm').addEventListener('submit', (ev) => {
    ev.preventDefault()
})

button.addEventListener('click', () => {
    if(!loginCorrect) {
        login.style.borderColor = 'red'
        document.querySelector('#loginError').style.display = 'block'
    }
    else{
        login.style.borderColor = 'white'
        document.querySelector('#loginError').style.display = 'none'
    }
    if(!passwordCorrect) {
        password.style.borderColor = 'red'
        document.querySelector('#passwordError').style.display = 'block'
    }
    else{
        password.style.borderColor = 'white'
        document.querySelector('#passwordError').style.display = 'none'
    }
    if(!emailCorrect) {
        email.style.borderColor = 'red'
        document.querySelector('#emailError').style.display = 'block'
    }
    else{
        email.style.borderColor = 'white'
        document.querySelector('#emailError').style.display = 'none'
    }
})