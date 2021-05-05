// let number = 10;
// console.log(number);

// let stringtype = "String"
// let boolValue = false

// console.log(stringtype);

// let numberArray = [20, 10, 30]
// console.log(numberArray);

// let numberString = prompt("Please enter a number");
// let number = parseInt(numberString)

// if (number == 10){
//     console.log("Number is 10");
// }
// else if (number == 20){
//     console.log("number is 10*2");
// }
// else {
//     console.log("number is not 10");
// }

// let Array = [20, 10, 30, 70];

// let sum = 0;

// for (let i = 0; i < array.length; i++)
// {const element = array[i];
//     sum = sum + element;}

// console.log(sum);

// 4MAY2021

// function multiply(p1, p2) {
//   return p1 * p2; // The function returns the product of p1 and p2
// }
// console.log(multiply(3, 3));
// // --------------------------------------
// function divide(p1, p2) {
//   return p1 / p2;
// }
// console.log(divide(6, 3));

// //   --------------------------
// function multiply(p1, p2) {
//   let multivalue = p1 * p2;
//   return multivalue;
// }
// console.log(multiply(1, 2));

// ------------05-MAY-2021--------------------------

// --------PASS-BY-VALUE------------------------------

// function multiply(p1, p2) {

//   p1 = "name";
//   p2 = "Name2";
//   value = p1 + p2;
//   return value; // The function returns the product of p1 and p2
// }

//   p1 = "firstName";
//   p2 = "SecondName";
// let multipliedValue = multiply(p1, p2);

// console.log(multiply(p1, p2));


// -----------OBJECTS-------------------

// let fiatCar = { 
//     type: "Fiat", 
//     model: "500", 
//     color: "white" 
// };

// let peugeorCar = {
//     type: "Peugeot", 
//     model: "406", 
//     color: "Grey",
//     price: 5000
// }

listOfCars = [
  { 
      type: "Fiat", 
      model: "500", 
      color: "white",
      price: 10000
  },
  { 
      type: "Fiat", 
      model: "600", 
      color: "white" 
  },
  {
      type: "Peugeot", 
      model: "406", 
      color: "Grey",
      price: 5000
  },
  {
     invalid: false
  },
  {

  }
]

//Before 
console.log("Before");
listOfCars.forEach(car => {
  console.log(car.type + " " + car.model + " " + car.color + " "+ car.price );
});

console.log(listOfCars.length);

listOfCars = listOfCars.filter((car) => car.type == "Fiat");

carModelNames = listOfCars.map((car) => car.model);

carModelNames.forEach(carModelName => {
  console.log(carModelName);
});


