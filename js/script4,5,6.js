"use strict";

//УРОКИ 4,5,6,


let number = 5; // изменяемая переменная
const leftBorderWidth = 1; // не изменяемая переменная

let number2 = 41;      // числа
let number3= 3.2;

const person = "maks";  // cтрока. можно исрользовать любые ковычки
const person2 = 'maks eto ja';
const person3 = `maks eto ti`;


const bool = false;   // boollen

console.log(something);   // null. Того чего не существует.


let und;
console.log(und);   // undefined. Не чего не присвоенно


// ///////////////////////////////////////////

const obj ={                  // объект, и его свойства. Свойства записываются чрез двоетосие, а не присвоеннием.
   name: 'Makc',
   age: 31,
   isMarried: false
};
console.log(obj.isMarried);   // два метода вывода. Лучше выводить через точку
console.log(obj['name']);


let arr = ['plun.png', 'orange.jpg', 6, 'apple.bmp', {}, []];  // класический массив. Можно поместить любой тип данных. Также можно туда поместить объект, массив.
console.log(arr[1]);   // нумерация начинается с нуля, а не с единицы.


