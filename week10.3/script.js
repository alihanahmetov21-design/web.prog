
//Задание 1: Сохранение примитивных данных в LocalStora
localStorage.setItem("greeting", "Привет мир!");

let gteeting = localStorage.getItem("greeting");
console.log("greeting");


//Задание 2: Удаление данных из LocalStorage
// про удалине данных из LocalStorageв презентацие нету!!!
localStorage.removeItem("greeting");

let greeting = localStorage.getItem('greeting');
console.log("greeting");

//Задание 3: Хранение объектов в LocalStorage с использованием JSON
/*
let user = {
    name: "Alikhan",
    age: 21,
    city: "Almaty"
};

localStorage.setItem("user",JSON.stringify(user));

let gituser = JSON.parse(localStorage.getItem("user"));

console.log(gituser);
*/


//Задание 4: Модификация данных в LocalStorage
 let user = JSON.parse(localStorage.getItem("user"));
 user.country = "Kazakhstan";

 localStorage.setItem("user", JSON.stringify(user));

 let setuser = JSON.parse(localStorage.getItem("user"));
 console.log(setuser);

 //Задание 5: Проверка наличия данных в LocalStorage

 let sduser = localStorage.getItem("user");
  if (sduser) {
    let user = JSON.parse(sduser);
    console.log("User found:", user)
  } else {
   
    let newuser = localStoroge.setItem("user", JSON.stringify(newuser));
    console.log("new user created:", newuser)
  };

  //Задание 6: Очистка LocalStorage
  // код дұрыс,но браузерде істемей тұр
  /*
localStorage.clear();
 let user  =  localStorage.getItem("user");
 console.log(user);
*/
 //Задание 7: Сохранение списка задач в LocalStorage

/*
 let tasks = [
    {title: "Купить продукты", completed:false},
    {title:"Позвонить другу", completed:true},
    {title:"Сделать домашнее задание", completed:false}
 ];

 localStorage.setItem("tasks",JSON.stringify(tasks));
 let gettasks = JSON.parse(localStorage.getItem("tasks"));
 console.log(gettasks);
*/
 //Задание 8: Обновление состояния задачи

 let tasks = JSON.parse(localStorage.getItem("tasks"));

 tasks[0].completed =true;

 localStorage.setItem("tasks", JSON.stringify(tasks));

 console.log(JSON.parse(localStorage.getItem("tasks")))