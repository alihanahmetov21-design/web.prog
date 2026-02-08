
// Задание 1: Изменение текста элемента


let message = document.getElementById("message");
message.textContent = "Добро пожаловать в JavaScript!";


// Задание 2: Работа с классами элементов


let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "green";
}


// Задание 3: querySelector и querySelectorAll



let box = document.querySelector(".box");
box.textContent = "Hello World!!!!";


let allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(item => {
    item.style.backgroundColor = "green";
    item.style.border = "10px solid greenyellow";
});


// Задание 4: Поиск элементов по классу highlight


let highlights = document.querySelectorAll(".highlight");

highlights.forEach(p => {
    p.textContent = "highlight";
    p.style.color = "red";
});

