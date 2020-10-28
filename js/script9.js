"use strict";

console.log(4 + "5");  // оператор присвоение
/////////////////////////////////////////
let incr = 5,
   decr = 10;

incr++;     // оператор инкремента. постфиксной
decr--;     // оператоп дикремента

++incr;     // форма записи называется префиксной
--decr; 

console.log(incr);
console.log(decr);
// примеры как работают постфикм и префикс
let incr = 5,
   decr = 10;

console.log(decr++);
console.log(decr);

console.log(++decr);
///////////////////

console.log(59%9);         // % Возвращает число от деления
///////////////////

console.log(9 == 9);  // оператор сравнения
console.log(5+99 === 9);  // строгое сравнения
/////////////////

//         &&        -  оператор И   Возвращает правду, если оба пожопечных будут правдивыми
//         ||        - опретор ИЛИ     Возвращает правду, если одно из условий true
const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);        // пример оператора И

console.log(isChecked && !isClose);    //  ! - оператор отрицания (изменяет true на false, и наооборот)
console.log(8 != 9);                   // оператор НЕ РАВЕН