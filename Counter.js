// Counter

function numCounter(selector, number, time, step) {
  const counter = document.querySelector(selector);
  
  let res = 0;
  
  const allTime = Math.round(time / (number / step));
  
  let interval = setInterval(() => {
    res = res + step
    
    if (res === number) {
      clearInterval(interval)
    }
    counter.innerHTML = res;
  }, allTime)
}

// Данная функция можут быть вызвана неограниченное количество раз

// Первый аргумент - селектор, куда будем выводить результат (с . если класс и с # если id). Пример: '.num1' или '#num1'
// Второй аргумент - конечное заняение, которое будет показано на странице
// Третий агрумент - время анимации (миллисекунды)
// Четвертый агрумент - шаг анимации (например, добавляем по 1 или по 10 или по 100)

numCounter('#num1', 2000, 3000, 50)
