'use strict';


//
// function f() {
//
//     console.log("fdhghdf");
//
// }
//
// const f2 = function () {
//     console.log('gfdjhgdfjhgjfd')
//
// };
// console.log(f2);


/*
const sum = function sum(a,b) {
    return a+b;

};

const sum2 = (a,b) => a+b;  /!*{
    return a+b;
};
*!/
*/

/*
const pow = function (number) {
    return number*number;

};
`
const  arrowPow = (number) =>{  // стандартный ввид стрелочной функция.
    return number*number;
};


const getObject2 = () => ({}); //  функция возращает обьект. Стрелочная функция с одним параметром  краткая ззапись.
*/


/*
const sum = (a , b ) => a+b;
*/


/*

const sum = function (a,b) {


    return +a + +b;
};

*/

//
// function Person(name , surname , age) {
//
//     this.name = name;
//     thiis
//
// }
//


const car1 = {
    _color: "red",

    _isRepainted: false,


    get color(){

        return this._color;
    },

    set color (value){
        this._color = value;
        this._isRepainted = true;
    },

};

console.log(car1);
car1.color = "Black";
console.log(car1);