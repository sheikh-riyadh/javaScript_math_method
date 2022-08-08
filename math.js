/* Explore of Math.round() method */

const number1 = 2.499;
const number2 = 3.74;

const resultOfRound1 = Math.round(number1);
console.log(resultOfRound1);
/* resultOfRound1 output is: 2 */

const resultOfRound2 = Math.round(number2);
console.log(resultOfRound2);
/* resultOfRound2 output is: 3 */

/* Explore of Math.pow() method */

const num = 2;

const resultOfPower = Math.pow(num, 2);
console.log(resultOfPower);
/* resultOfPower output is: 4 */

/* Here we explore Math.ceil() mathod */
const resultOfCeil = Math.ceil(7.1)
console.log(resultOfCeil);
/* resultOfCeil output is: 8 */

/* Here we explore Math.floor() method */

const resultOfFloor = Math.floor(3.9);

console.log(resultOfFloor);

/* resultOfFloor output is: 3 */

/* Here we explore Math.random method */

console.log(Math.round(Math.random() * 10));


/* Normal case  */
let temp;
let num1 = 10;
let num2 = 30;
console.log(num1, num2);

/* output is: 10, 30  */

/* Here doing swaping */
temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);
/* output is: 30, 10  */


let number3 = 40;
let number4 = 7;

/* Another swaping way which is call destructuring */
[number3, number4] = [number4, number3];

console.log(number3, number4);

/* output is: 7, 40  */



