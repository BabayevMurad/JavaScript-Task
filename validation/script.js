function viewElement(login, password, bol) {
  if(bol) {
    document.getElementById('screeen').innerHTML = `
    <p><span class="lbl">Login:</span> ${login}</p>
    <p><span class="lbl">Password:</span> ${password}</p>
    `
  }
  else{
    document.getElementById('screeen').innerHTML = `
    <p class="warning">Wrong Format</p>
    `
  }
}



function validation() {
  let login = document.getElementById('login').value
  let password = document.getElementById('password').value

  let bol = false;

  if(login.length > 8 && password.length > 8) {
    bol = true
  }

  viewElement(login, password, bol)
}

document.getElementById("send").addEventListener('click', () => {
  validation()
})