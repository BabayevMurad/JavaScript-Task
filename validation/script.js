function getElement(login, password){
  let div = document.getElementById('screeen')
  div.innerHTML = `
    <p>Login:${login}; Password:${password}</p>
  `
}

function evets() {
  document.getElementById('send').addEventListener('click', () => {
		let login = document.getElementById('login').value
    let password = document.getElementById('password').value

    if ((login !== undefined && login.length > 0) && (password !== undefined && password.length > 8)) {
      getElement(login, password)
      console.log(login.length)
      console.log(password.length)
    }
	})
}

evets()