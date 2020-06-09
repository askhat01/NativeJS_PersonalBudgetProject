'use strict'

let money = +prompt("Ваш бюджет на месяц?", ""),
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};

//Используем цикл for
for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 30) {
      console.log("Пользователь ввел корректные данные");
      appData.expenses[a] = b;
   } else {
      console.log("Пользователь ввел НЕкорректные данныеe");
      i--;
   }
};

//Используем цикл while
// let i = 0;
// while (i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдется?", "");
//    if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 30) {
//       console.log("Пользователь ввел корректные данные");
//       appData.expenses[a] = b;
//    } else {
//       console.log("Пользователь ввел НЕкорректные данные");
//       i--;
//    }
//    i++;
// };

//Используем цикл do ... while
// let i = 0;
// do {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдется?", "");
//    if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 30) {
//       console.log("Пользователь ввел корректные данные");
//       appData.expenses[a] = b;
//    } else {
//       console.log("Пользователь ввел НЕкорректные данные");
//       i--;
//    }
//    i++;
// }
// while (i < 2);

appData.budgetPerDay = appData.budget / 30;

alert("Ваш ежедневный бюджет составляет: " + appData.budgetPerDay);

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