console.log('#6. JavaScript homework example file')

/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для управління даними про калорійність продуктів. Необхідно реалізувати наступні функціональності:
 * Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
 * Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою. Якщо продукт не знайдено, повертає рядок 'Product not found'.
 * Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.
 *
 * Критерії перевірки:
 * Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
 * Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
 * Наявність методів addProduct, getProductCalories, та removeProduct.
 */

class CalorieCalculator { // Шаблон, который будет использоваться для создания экземпляров калькулятора калорийности.
  constructor () { // Конструктор — это специальный метод, который запускается автоматически, когда мы создаём новый экземпляр из класса. Он позволяет задавать начальные значения для свойств этого экземпляра.
    this.products = new Map (); // Products - будет хранить продукты и их калорийность.
  }                             // Map - это структура данных, которая хранит "ключ-значение" (ключи - продукты; значения — калорийность).

  addProduct (productName, calories) {
    this.products.set (productName, calories); // Добавляем продукт с его калорийностью в Map.
  }

  getProductCalories (productName) { 
    if (!this.products.has (productName)) { // Проверка - существует ли продукт в Map.
      return 'Product not found'; // Вернёт 'Product not found', если продукт не найден.
    }
    return this.products.get (productName); // Вернёт калорийность (значение), если продукт найден.
  }

  removeProduct (productName) {
    this.products.delete (productName); // Удаляем продукт из Map.
  }
}


const calorieCalculator = new CalorieCalculator(); // Создание нового экземпляра класса CalorieCalculator и сохранение его в переменной calorieCalculator.

calorieCalculator.addProduct('Apple', 52);
calorieCalculator.addProduct('Banana', 89);

console.log(calorieCalculator.getProductCalories('Apple'));
console.log(calorieCalculator.getProductCalories('Banana'));

calorieCalculator.removeProduct('Apple');
console.log(calorieCalculator.getProductCalories('Apple'));

/*
 * #2
 * Задача: Унікальні користувачі.
 * Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження унікальних імен користувачів. Клас має надавати можливість:
 * Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору. Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
 * Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
 * Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.
 *
 * Критерії перевірки:
 * Наявність методів addUser, exists, count у класі UniqueUsernames.
 * Використання конструкції class для створення класу UniqueUsernames.
 * Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.
 */

class UniqueUsernames {
  constructor () {
    this.usernames = new Set(); // Создаём новый пустой Set для хранения уникальных имён.
                                // Set — это коллекция значений, которая хранит уникальные значения.
  }

  addUser(username) {
    this.usernames.add (username);
  }

  exists(username) {
    return this.usernames.has (username);
  }

  count() {
    return this.usernames.size; // Возвращаем количество уникальных имён.
  }
}


const uniqueUsernames = new UniqueUsernames(); // Создание нового экземпляра класса UniqueUsernames и сохранение его в переменной uniqueUsernames.

uniqueUsernames.addUser('john_doe');
uniqueUsernames.addUser('jane_doe');
uniqueUsernames.addUser('john_doe'); // Ничего не добавиться, потому что 'john_doe' уже существует.

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`);
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`);