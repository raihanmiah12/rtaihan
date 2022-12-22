// using function calling
function intotal() {
    let num1 = 4;
    let num2 = 5;
    let num3 = 6;
    document.write("<br/> Addition Result is: " + num1+num2+num3);
    document.write("<br/> Substraction Result is: " + num3-num2-num1);
    document.write("<br/> Multiplication Result is: " + num1*num2*num3);
    document.write("<br/> Division Result is: " + num1/num2/num3);
}
intotal();
//using parametarized function calling
function total(Num1,Num2,Num3){
  document.write("<br/> Addition value is: " + (Num1+Num2+Num3));
  document.write("<br/> Substraction value is: " + (Num1-Num2-Num3));
  document.write("<br/> Multiplication value is: " + (Num1*Num2*Num3));
  document.write("<br/> Division value is: " + (Num1/Num2/Num3));
}
let num1 = Number(prompt("Enter a Number"));
let num2 = Number(prompt("Enter a Number"));
let num3 = Number(prompt("Enter a Number"));
total(num1,num2,num3);