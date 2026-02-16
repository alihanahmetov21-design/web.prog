//Задание 1: Использование `setTimeout`

setTimeout(() => {
    console.log("Привет мир!");
}, 2000);

// 
//Задание 2: Использование `setInterval`

setInterval(() => {
    const time = new Date();

    const h = String(time.getHours()).padStart(2, "0");
    const m = String(time.getMinutes()).padStart(2, "0");
    const s = String(time.getSeconds()).padStart(2, "0");
    console.log(`${h}:${m}:${s}`);
}, 1000);

//Задание 3: Остановка `setInterval

 /* let count = 0
 setInterval(() => {
    const intervalId = new Date();

    const h = String(time.getHours()).padStart(2, "0");
    const m = String(time.getMinutes()).padStart(2, "0");
    const s = String(time.getSeconds()).padStart(2, "0");
    console.log(`${h}:${m}:${s}`);

    count++;

    if (count === 5) {
        clearInterval(intervalId);

    }

}, 1000);
*/

//Задание 4: Создание и использование `Promise`
/*
function fechdate() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Ланные получены!");
        }, 3000);
    });
}

fetchData().then(result => {
  console.log(result);
});
*/
//
//Задание 5: Ошибка в `Promise`

/*
function fetchDataWithError(){
    return new Promise((_, reject) => {
        setTimeout(() => reject('Ошибкф зфгрузки!'), 2000);
    });
}

fetchDataWithError().catch(err => console.log(err));

*/
//Задание 6: `async/await` с `Promise`

/*
function fechdate() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Ланные получены!");
        }, 3000);
    });
}

async function fetchDataAsync(){
    const result = await fechdate();
    return result;
}

fetchDataAsync().then(data => {
    console.log(data);
});
*/
/*
//Задание 7: Обработка ошибок с `async/await`
function fetchDataWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Ошибка загрузки!");
    }, 2000);
  });
}

async function fetchDataWithErrorAsync() {
  try {
    const result = await fetchDataWithError();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchDataWithErrorAsync();


//
//Задание 8: Последовательное выполнение асинхронных операций
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача 1 выволнена!");
        }, 1000);
    });
}


function task2() {
    return new Promise((resolve) => {
        setTimeout((resolve)=> {
            resolve("Задача 2 выпелена!");
        }, 2000);
    });
}


async function runTasks() {
    const result = await task1();
    console.log(result1);

    const result2 = await task2();
    console.log(result2);
}

runTasks();



//Задание 9: Параллельное выполнение асинхронных операций

function taskA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача A выпелена!");
        }, 2000);
    });
}

function taskB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача B выпелена!");
        }, 3000);
    });
}

async function runTasks() {
  const results = await Promise.all([taskA(), taskB()]);
  console.log(results[0]);
  console.log(results[1]);
}

runTasks();
*/
//Задание 10: Асинхронная функция с задержкой

async function delayedMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}
delayedMessage("Привет через 2 секунды", 2000);
//
