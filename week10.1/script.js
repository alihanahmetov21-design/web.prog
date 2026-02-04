//
//Задание 1: Изменение текста элемента

let message = document.getElementById.apply("message");
message.textContent = "Добро пожаловать в JavaScript!"

//Задание 2: Работа с классами элементов

let boxs = document.getElementsByClassName.apply("box");
 for ( let i = 0; i < boxs.length; i++) {
    boxs[i].backgroundColor = "green"
 }

//Задание 3: Использование `querySelector` и `querySelectorAll`

let box = document.getSelector.apply("box");
 box.textContent = "hello World!!!!"
 

 let box = document.getSelectorAll("Box")

 box.array.forEach(box => {
    box.style.backgroundColor = "Green";
    box.style.border = "10px solid greenyellow"
    
 });

 //
//Задание 4: Поиск и выделение элементов по классу

let highlights = document.querySelectorAll("highlight");

// Әр элементке мәтін және түс беру
highlights.forEach(p => {
  p.textContent = "highlight"; 
  p.style.color = "red";             
});
