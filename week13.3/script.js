//Задание 1: Что такое AJAX?

/*AJAX

AJAX (Asynchronous JavaScript and XML) — это подход к разработке веб-приложений,
 позволяющий обмениваться данными с сервером асинхронно, без перезагрузки страницы. 
 Это означает, что веб-страниц
еа может обновлять данные на странице без полной перезагрузки всего документа. 
 AJAX использует XMLHttpRequest или Fetch API для отправки и получения данных от сервера.
 И еще многые компания используют AJAX для создания более диеамаичных и отзывчивых!
 компания: Google, Facebook, Twitter,Amazon, Instagraam, и т.др...
*/

//Задание 2: Загрузка данных с помощью XMLHttpRequest

// 1️⃣ XMLHttpRequest объектісін жасаймыз

/*
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        data.forEach(post => {
            console.log(post.title);
        });
    } else {
        console.error("Ошибка запроса:", xhr.status);
    }
}


xhr.onerror = function () {
    console.error("Сетевая ошибка!")
};
xhr.send()


//Задание 3: Рендер списка на странице
/*
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const posts = JSON.parse(xhr.responseText);
        const ul = document.createElement("ul");
        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            ul.appendChild(li);
        });
        document.getElementById("posts").appendChild(ul);
    } else {
        console.error("Ошибка загрузки!!!", xhr.status);
    }

}

xhr.onerror = function () {
    console.error('Сетевоя ошибка!!!')
};
 xhr.send();

*/
//Задание 4: Отображение дополнительных данных
/*

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("posts");

    if (!container) {
        console.log('Ошибка: id="posts" элемент не найден');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {

            const posts = JSON.parse(xhr.responseText);
            const ul = document.createElement("ul");

            posts.forEach(post => {
                const li = document.createElement("li");
                li.innerHTML =
                    "<strong>Заголовок:</strong> " + post.title + "<br>" +
                    "<strong>Текст:</strong> " + post.body + "<br>" +
                    "<strong>ID пользователя:</strong> " + post.userId;

                ul.appendChild(li);
            });

            container.innerHTML = "";
            container.appendChild(ul);

        } else {
            console.error("Ошибка HTTP:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error("Network error");
    };

    xhr.send();
});
*/

//
//Задание 5: Обработка ошибок при запросе
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.responseText);
    var text = "<ul>";

    for (var i = 0; i < data.length; i++) {
      text += "<li>" + data[i].title + "</li>";
    }

    text += "</ul>";
    document.getElementById("posts").innerHTML = text;
  } else {
    document.getElementById("error").innerText =
      "Ошибка загрузки данных. Код ошибки: " + xhr.status;
  }
};

xhr.onerror = function () {
  document.getElementById("error").innerText =
    "Сервер не отвечает или отсутствует интернет.";
};

xhr.send();


//Задание 6: Добавление индикатора загрузки

var xhr = new XMLHttpRequest();

var loading = document.getElementById("loading");
var posts = document.getElementById("posts");


loading.style.display = "block";

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {

  loading.style.display = "none";

  if (xhr.status == 200) {
    var data = JSON.parse(xhr.responseText);

    var html = "<ul>";

    for (var i = 0; i < data.length; i++) {
      html += "<li>" + data[i].title + "</li>";
    }

    html += "</ul>";

    posts.innerHTML = html;
  } else {
    posts.innerHTML = "Ошибка загрузки данных";
  }
};

xhr.onerror = function () {
  loading.style.display = "none";
  posts.innerHTML = "Сервер не отвечает";
};

xhr.send();

// 5-6 тапсырмаларды маған қиындау және түсініксіз болды,  созонда түсіндіріп берсеңіз болама ? Структурасын түсіндім,  но логикасын түсіне алмадым.