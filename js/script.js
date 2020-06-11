'use strict'

let money, time;

function budgetAndTime() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

   while (isNaN(money) || money == '' || money == null) {
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
   savings: true,
   chooseExpenses: function () {
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
   },
   detectDayBudget: function () {
      appData.budgetPerDay = (appData.budget / 30).toFixed();
      alert("Ваш ежедневный бюджет составляет: " + appData.budgetPerDay);
   },
   detectLevel: function () {
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
   },
   checkSaving: function () {
      let deposit = +prompt('Какова денежная сумма на депозите?');
      let percent = +prompt('Укажите годовую ставку вознаграждения по депозиту? (в %)');

      appData.monthIncome = ((deposit * (percent / 100)) / 12).toFixed();;
      alert("Ежемесечный доход по Вашему депозиту составляет " + appData.monthIncome);
   },
   chooseOptionalExpenses: function () {
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
   },
   chooseIncome: function () {
      let items = prompt('Укажите статьи дополнительного дохода (перечислите через запятую)', '');

      if (typeof (items) != 'string' && typeof (items) == '' && typeof (items) == null) {
         console.log('Вы ввели некорректные данные или не ввели их вовсе');
      } else {
         console.log("Пользователь ввел корректные данные");
         appData.income = items.split(', ');
         appData.income.push(prompt('Укажите еще один способ дополнительного заработка, если Вы забыли его упомянуть.', ''));
         appData.income.sort();
      }
      appData.income.forEach(function (item, i) {
         alert('Способы дополнительного заработка: ' + (i + 1) + ' - ' + item);
      })
   }
};

for (let key in appData) {
   console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}