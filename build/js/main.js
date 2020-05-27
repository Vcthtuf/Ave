"use strict"

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

start();

chooseExpenses();

chooseOptExpenses();

detectDaybudget();

detectLevel();

checkSavings();


// functions

// Запрос бюджета на месяц и даты, добавление в объект 'appData'

function start() {

    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-05-24');

    while(isNaN(money) || money =='' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    return appData.budget;
}

// Расчет уровня достатка и вывод его пользователю

function detectLevel() {
    let text;

    switch(true) {
        case appData.MoneyPerDay <= 100:
            text = 'У вас маленький уровень достатка';
            break;

        case (appData.MoneyPerDay > 100 && appData.MoneyPerDay <= 2000):
            text = 'У вас средний уровень достатка';
            break;

        case appData.MoneyPerDay >2000:
            text = 'У вас высокий уровень достатка';
            break;

        default:
            alert('Произошла ошибка');
            break;
    }
    alert(text);
}

// Расчет бюджета на день и вывод его пользователю

function detectDaybudget(){

    appData.MoneyPerDay = (appData.budget/30).toFixed(2);
    alert('Ваш бюджет на день: ' + appData.MoneyPerDay);
    return appData.MoneyPerDay;
}

// Запрос накоплений и процента по ним. Расчет и вывод прибыли за месяц

function checkSavings(){

    if(appData.savings) {
        let save = +prompt('Какова сумма ваших накоплений?','');

            while(isNaN(save) || save == '' || save == null) {
                save = +prompt('Какова сумма ваших накоплений?','');
            }
        
        let percent = +prompt('Какой процент?', '');

            while(isNaN(percent) || percent == '' || percent == null) {
                percent = +prompt('Какой процент?', '');
        }
        appData.monthIncore = ((save*percent)/(100*12)).toFixed(2);
        alert('Ваша прибыль за месяц: ' + appData.monthIncore + ' рублей!');
    }   
}

// Запрос необязательных расходов и занесение их в объект 'appData'

function chooseOptExpenses() {
    for(let i = 1; i<=3; i++) {
        let item = prompt('Введите необязательную статью расходов в этом месяце', '');
            
        if(typeof(item)==='string' && typeof(item) !=null && 
            item != '' && item.length < 50) {

            appData.optionalExpenses[i] = item; 

        } else {
            i--;
        }
    }
}

// Запрос обязательных расходов и занесение их в объект 'appData'

function chooseExpenses(){
    for(let i = 0; i<2; i++) {
        let item = prompt('Введите обязательную статью расходов в этом месяце', '');
        let price = +prompt('Во сколько обойдется?', '');

        if(typeof(item)==='string' && typeof(item) !=null && typeof(price) !=null && 
            item != '' && price != '' && item.length < 50) {
            appData.expenses[item] = price;
        } else {
            i--;
        }
    }
}

/*function roundNum(number) {
    
    return Math.round(number);
}

console.log(parseInt('34.345px'));
console.log(typeof(parseInt('34.345px')));
console.log(parseFloat('34.345px'));
console.log(typeof(parseFloat('34.345px')));
*/


