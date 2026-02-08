let button = document.querySelector("#jsbutton");

button.addEventListener("click", () => {
    alert("Button clicked")
});


//Задание 3: Множественные события на одном элементе

let div = document.querySelector("#myDiv");
div.addEventListener("click", () => {
    div.style.backgroundColor = "blue";
});

div.addEventListener("mouseover", () => {
    console.log("Элемент нажат")
});

//
//Задание 4: Работа с объектом события `event`

let input = document.querySelector("#textinput");

input.addEventListener("keydown", (event) => {
    console.log(event.key)
});


//задание 5: Отмена действия по умолчанию//
let link = document.querySelector("#myLink");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Переход по ссылке отменен")
});


//Задание 6: Делегирование событий

let list = document.querySelector("#list");
list.addEventListener("click",(event) => {
    if(event.target && event.target.nodeName === 'LI'){
        console.log("Элемент списка " + event.target.textContent + "был нажат")
    }

});


//Задание 7: События клавиатуры
let keyboardinput = document.querySelector("#keyboardInput");
keyboardinput.addEventListener("keydown", (event) => {
    console.log(event.code)

});