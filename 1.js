console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    // Функція повертає новий проміс
    // За допомогою setTimeout ми симулюємо затримку timeout, яка виникає при роботі з асинхронними джерелами даних
    // Якщо об'єкт не пустий, ми викликаємо resolve з data
    // Якщо об'єкт пустий, ми викликаємо reject з новим об'єктом Error("Об'єкт пустий")

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(data).length === 0) {
          reject(new Error("Об'єкт пустий"));
        } else {
          resolve(data);
        }
      }, timeout);
    });
  }

  // Ми викликаємо getData з об'єктом { name: "John", age: 30, city: "New York" } і часом очікування 2000

  // Ми обробляємо дані, повернуті промісом
  // У разі успіху виводимо в консоль дані
  // У разі помилки виводимо повідомлення помилки
  // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"

  getData({ name: "John", age: 30, city: "New York" }, 2000)
    .then((result) => {
      console.log(result); // У разі успіху виводимо в консоль дані
    })
    .catch((error) => {
      console.log(error.message); // У разі помилки виводимо повідомлення помилки
    })
    .finally(() => {
      console.log("Завдання 1 завершено"); // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"
    });
}

// Викликаємо функцію task1
task1();
