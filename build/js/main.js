"use strict"

let money, time;

function start() {    // Запрос бюджета на месяц и даты, добавление в объект 'appData'
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-05-24');
    while(isNaN(money) || money =='' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    return appData.budget;
};

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {    // Запрос обязательных расходов и занесение их в объект 'appData'
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
    },
    chooseOptExpenses: function() {   // Запрос необязательных расходов и занесение их в объект 'appData'
        for(let i = 1; i<=3; i++) {
            let item = prompt('Введите необязательную статью расходов в этом месяце', '');
                
            if(typeof(item)==='string' && typeof(item) !=null && 
                item != '' && item.length < 50) {
    
                appData.optionalExpenses[i] = item; 
    
            } else {
                i--;
            }
        }
    },
    detectLevel: function() {   // Расчет уровня достатка и вывод его пользователю
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
    },
    detectDaybudget: function() {   // Расчет бюджета на день и вывод его пользователю
        appData.MoneyPerDay = (appData.budget/30).toFixed(2);
        alert('Ваш бюджет на день: ' + appData.MoneyPerDay);
        return appData.MoneyPerDay;
    },
    checkSavings: function() {   // Запрос накоплений и процента по ним. Расчет и вывод прибыли за месяц
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
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
    }
};

// start();

let arr = [89, 5, 76, 11];
    let i = arr.sort(compareNum);

    function compareNum(a,b) {
        return a-b;
    };

    //console.log(arr);

//localStorage.setItem("number", 12);

let form, surname, name, middle_name, position;

//let input_submit = document.getElementById('submit');

let person = {};


function get_elements_form() {

    surname = document.getElementById('surname').value;

    name = document.getElementById('name').value;

    middle_name = document.getElementById('middle_name').value;

    position = document.getElementById('position').value;

    //write_person(surname, name, middle_name, position)();

    person['surname'] = surname;
    alert(surname);

    
    
    return person

   /* let SerialazedPerson = JSON.stringify(person);

    localStorage.setItem("surname", SerialazedPerson);

    console.log(JSON.parse(localStorage.getItem("surname")));*/
    
};











//console.log(surname);










    









