/* export const Addition = () => {
  console.log("Heee");
};

export const Substraction = (n1, n2) => {
  return n1 - n2;
};
export const Division = (n1, n2) => {
  return n1 / n2;
};
export const Multiplication = (n1, n2) => {
  return n1 * n2;
};
export const modulos = (n1, n2) => {
  return n1 % n2;
};
 */
const Addition = (n1, n2) => {
  return n1 + n2;
};
console.log("Addition is ", Addition(5, 2));

const Substraction = (n1, n2) => {
  return n1 - n2;
};
console.log("Substraction is", Substraction(5, 5));

const Division = (n1, n2) => {
  return n1 / n2;
};
console.log("Division is ", Division(100, 2));

const Multiplication = (n1, n2) => {
  return n1 * n2;
};
console.log(`Multiplication is `, Multiplication(5, 5));

const modulos = (n1, n2) => {
  return n1 % n2;
};
console.log("Modulos nd Rem is ", modulos(10, 5));

export { Addition, Substraction, Multiplication, Division, modulos };







/* 
function counter() {
  for (let count = 1; ; count++) {  // infinite loop
    console.log(`${count}A`); // until 5
    if (count === 5) {
      return;
    }
    console.log(`${count}B`);  // until 4
  }
  console.log(`${count}C`);  // never appears
}

counter(); */

// Output:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

/* 
let n1=5;
let n2=5
let sum=n1+n2;
console.log(sum) */
/* 
function Add() {
  let n1 = 5;
  let n2 = 5;
   return n1 + n2;
}
console.log(Add);

// const Add=()=>{
  // }
  */
