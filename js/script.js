let money = prompt("Ваш бюджет на месяц?", ""),
   time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
   a2 = prompt("Во сколько обойдется?", ""),
   b1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
   b2 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.b1 = b2;

alert("Ваш бюджет на один день составляет:" + appData.budget / 30);