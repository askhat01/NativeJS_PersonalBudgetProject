'use strict'

// let money = +prompt("Ваш бюджет на месяц?", ""),
//    time = prompt("Введите дату в формате YYYY-MM-DD", "");

// Используем функцию для получения данных о бюджете и дате, сделаем проверку ввода корректных данных

let money, time; //объявим наши переменные money и time глобально, чтобы они были видны во всей нашей программе
function budgetAndTime() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

   while (isNaN(money) || money == '' || money == null) { //использовали функцию isNaN() для проверки ввода нечислового значения.
      console.log("Пользователь ввел НЕкорректные данныe");
      money = +prompt("Ваш бюджет на месяц?", "");
   }
}

budgetAndTime();

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true // Предположим, что у пользователя есть депозит
};

//Оформим наш выбор обязательных расходов в виде функции
function chooseExpenses() {
   for (let i = 0; i < 2; i++) { //Используем цикл for
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
         b = prompt("Во сколько обойдется?", "");

      if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 30) {
         console.log("Пользователь ввел корректные данные");
         appData.expenses[a] = b;
      } else {
         console.log("Пользователь ввел НЕкорректные данныe");
         i--;
      }
   }
}

chooseExpenses();

// Создадим функцию для определения 3-х статей необязательных расходов пользователя 
function chooseOptionalExpenses() {
   for (let i = 0; i < 3; i++) { //Используем цикл for
      let c = prompt("Введите необязательную статью расходов в этом месяце", ""),
         d = prompt("Во сколько обойдется?", "");

      if (typeof (c) === 'string' && typeof (c) != null && typeof (c) != null && c != '' && d != '' && c.length < 30) {
         console.log("Пользователь ввел корректные данные");
         appData.optionalExpenses[c] = d;
      } else {
         console.log("Пользователь ввел НЕкорректные данныe");
         i--;
      }
   }
}

chooseOptionalExpenses();

// Представим расчет ежедневного бюджета в виде функции
function detectDayBudget() {
   appData.budgetPerDay = (appData.budget / 30).toFixed();
   alert("Ваш ежедневный бюджет составляет: " + appData.budgetPerDay);
}

detectDayBudget();

//Представим определение уровня достатка в виде функции 
function detectLevel() {
   if (appData.budgetPerDay < 1000) {
      console.log("Уровень дохода ниже прожиточного минимума (для справки: на 2020 год величина прожиточного минимума составляет 32 668)");
   } else if (appData.budgetPerDay > 1000 && appData.budgetPerDay < 5000) {
      console.log("Уровень дохода ниже среднего");
   } else if (appData.budgetPerDay > 5000 && appData.budgetPerDay < 6500) {
      console.log("Уровень дохода средний");
   } else if (appData.budgetPerDay > 6500) {
      console.log("Уровень дохода высокий");
   } else {
      console.log("Произошла ошибка");
   }
}

detectLevel();

// Новая функция для расчета ежемесячного дохода по депозиту
function checkSaving() {
   let deposit = +prompt('Какова денежная сумма на депозите?');
   let percent = +prompt('Укажите годовую ставку вознаграждения по депозиту? (в %)');

   appData.monthIncome = ((deposit * (percent / 100)) / 12).toFixed();;
   alert("Ежемесечный доход по Вашему депозиту составляет " + appData.monthIncome);
}

checkSaving();