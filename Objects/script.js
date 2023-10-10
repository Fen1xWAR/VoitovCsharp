function Person(name,surname,age,address,phone) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.address = address;
    this.phone = phone
    this.GetInfo = function (){
        return `Имя: ${this.name} \nФамилия: ${this.surname} \nВозраст: ${this.age} \nАдрес: ${this.address} \nНомер телефона: ${this.phone}`
    }
}


let ivan = new Person('Иван','Иванов',21, 'ул. Светлого будущего д. 1',"8890424242")
let petr = new Person('Петр','Бобров',40, 'ул. Пушкина д.16','8923479872498')
let sergey = new Person('Сергей','Волков',49, 'ул. Яблочная д.4','897862486472')
let andrey = new Person('Андрей','Балконский',30, 'ул. 1905г д.16','893329043203')

persons  = [ivan,petr,sergey,andrey]

function PrintPersons() {
    let wrapper = document.getElementsByClassName("wrapper")[0]
    wrapper.innerHTML = '';
    for (let i = 0; i < persons.length; i++) {
        let item = document.createElement('pre')
        item.style.fontSize = "20px";
        item.innerText = persons[i].GetInfo();
        wrapper.appendChild(item);
    }
}
function PrintThirdPerson() {
    let wrapper = document.getElementsByClassName("wrapper")[0]
    wrapper.innerHTML = '';
    let item  = document.createElement('pre')
    item.style.fontSize = "20px"    ;
    item.innerText = persons[2].GetInfo();
    wrapper.appendChild(item);
}



