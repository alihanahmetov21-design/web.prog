//Задание 1: Первый запрос с Fetch API

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("Ошибка запроса");
        }
        return response.json();
    })
    .then(data => {
        console.log("Заголовок:", data.title);
        console.log("текст поста:", data.title)
    })
    .catch(error => {
        console.error("Произлошла ошибка:", error);
    });


//   
//Задание 2: Настройка Fetch-запроса
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Новый пост",
        body: "Содержимое поста",
        userId: 1
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Шибка при создании поста");
        }
        return response.json();
    })
    .then(data => {
        console.log("Пост успешно создан!");
        console.log(data)
    })

    .catch(error => {
        console.error("Ошибка:", error);
    })



//Задание 3: Обработка ошибок
fetch("https://jsonplaceholder.typicode.com/nonexistent")

    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP оштбка: ${response.status}`);
        }
        return response.json();
    })

    .then(data => {
        console.log("Данные получены:", data);
    })
    .catch(error => {
        console.error("Запрос завершился с ошибкой:", error);
        console.error(error.message)
    })


//Задание 4: Конфигурация с методами PUT и DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Обновлённый заголовок поста",
        body: "Содержимое поста",
        userId: 1
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Ошибка при обнавлении поста");
        }
        return response.json();
    })

    .then(data => {
        console.log("Пост успешно обнавлен:");
        console.log(data);
    })
    .catch(error => {
        console.error("Ошибки PUT-запросов:", error.message);
    })






//delete!!!!!!

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})

    .then(response => {
        if (!response.ok) {
            throw new Error("Ошибка при удалении поста");
        }
        console.log("Пост успешно удален (DELETE)");
    })
    .catch(error => {
        console.error("Ошибка:", error.message);
    });

//
//Задание 5: Обработка ошибок с `async/await`

async function updatePost () {
    try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
        body: JSON.stringify( {
            id: 1,
            title: "(asyns/await)",
            body: " Постың мазмүны",
            userId: 1
        })
        }
        );
        if (!response.ok) {
            throw new Error(`HTTP ошибка : ${response.status}`);
        }
        const data = await response.json();
        console.log("Пост обнавлен успешно!:")
        console.log(data);
    } catch(error) {
        console.error("Ошибка:", error.message);
    }
}

updatePost()

///Задание 6: Запрос с кастомной конфигурацией
fetch("https://jsonplaceholder.typicode.com/comments", {
    method:"GET",
    headers: {
        "User-Agent": "MyApi/1.0",
        "Authorization": "Bearer test-token-123",
        "Content-Type": "application/json"
    }
}) 
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP ошибка: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log("Коментарий получены:")
    console.log(data)
})
.catch(error => {
    console.error("Ошибка!!!")
    console.error(error.message)
})
    
    
    
