const englishData = {
  name: "John",
  age: 30,
  city: "New York",
  occupation: "Engineer",
  company: "TechCorp",
  phone: "+1 555 1234",
  email: "john.doe@example.com",
  address: "123 Elm St",
  education: "Bachelor's Degree",
  hobby: "Photography",
  favorite_food: "Pizza",
  favorite_color: "Blue",
  favorite_movie: "Inception",
  favorite_book: "1984",
  language: "English",
  nationality: "American",
  marital_status: "Single",
  has_pets: true,
  children: 0,
  car: "Tesla Model S"
};

const russianData = {
  name: "Джон",
  age: 30,
  city: "Нью-Йорк",
  occupation: "Инженер",
  company: "ТехКорп",
  phone: "+1 555 1234",
  email: "john.doe@пример.com",
  address: "ул. Эльм, 123",
  education: "Степень бакалавра",
  hobby: "Фотография",
  favorite_food: "Пицца",
  favorite_color: "Синий",
  favorite_movie: "Начало",
  favorite_book: "1984",
  language: "Английский",
  nationality: "Американец",
  marital_status: "Не женат",
  has_pets: true,
  children: 0,
  car: "Тесла Модель S"
};

function element(){
    let lang = new URLSearchParams(window.location.search)
    let la = lang.get('lang')
    
    let obj;
    
    if(la === 'ru'){
        obj = Object.entries(russianData)
    }
    else{
        obj = Object.entries(englishData)
    }
    
    for(let i=0; i< obj.length; i++) {
        if(document.getElementById(obj[i][0])){
            document.getElementById(obj[i][0]).innerHTML = `${obj[i][0]}: ${obj[i][1]}`
        }
        else{
            document.createElement('p').innerHTML = `${obj[i][0]}: ${obj[i][1]}`
        }
    }
}

element()

document.getElementById('but').addEventListener('click', ()=> {
    if(document.getElementById('but').innerText === 'Russian') {
        let newUrl = `${window.location.pathname}?lang=ru`
        window.history.pushState({path: newUrl}, '', newUrl)
        document.getElementById('but').innerHTML = 'English'
        element()
    }
    else{
        let newUrl = `${window.location.pathname}?lang=en`
        window.history.pushState({path: newUrl}, '', newUrl)
        document.getElementById('but').innerHTML = 'Russian'
        element()
    }
})