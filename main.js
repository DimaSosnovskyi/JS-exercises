let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
let notLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
// Write a JavaScript program to display the current day and time in the following format
//  Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
const currentDayAndTime = () => {
  let date = new Date();
  let amOrPm;
  if (date.getHours() < 12) {
    amOrPm = 'AM'
  } else {
    amOrPm = 'PM';
  }
  console.log("Today is " + days[date.getDay()]);
  console.log('Current time is: ' + date.getHours() + amOrPm + " : " + date.getMinutes() + " : " + date.getSeconds());
}
// Write a JavaScript program to print the contents of the current window. 
const printContent = () => window.print();
//Write a JavaScript program to get the current date. 
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const getCurrentDate = () => {
  let date = new Date();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  console.log(date.getDate() + '/' + month + '/' + date.getFullYear())
}
// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
const getAreaOfTriangle = (a,b,c) => {
  let p = (a + b + c) / 2;
  if (((a + b) < c) || ((a + c) < b) || ( (c + b) < a)) {
    return 'There is not a such triangle';
  } else if (a === b === c) {
    return a*a*Math.sqrt(3) / 4;
  } else {
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
  }
}
//Write a JavaScript program to rotate the string 'w3resource'
//in right direction by periodically removing one letter from
// the end of the string and attaching it to the front. 
const animateString = (id) => {
  let elem = document.getElementById(id);
  let nodeEl = elem.childNodes[0];
  let text = nodeEl.data;
  setInterval(() => {
    text = text[text.length - 1] + text.slice(0, text.length - 1);
    nodeEl.data = text;
  },100)
}
//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
const isLeapYear = year => {
  if (year % 4 === 0) {
    return `${year} - is a leap year`
  } else {
    return `${year} - is't a leap year`
  }
}
// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
const findFirstJanuary = (year1,year2) => {
  for (let i = 0; i < year2 - year1; i++) {
    let date = new Date(year1 + i,0,1);
    if(date.getDay() === 0) {
      console.log( `1st January ${year1 + i} is a Sunday`);
    }
  }
}
//Write a JavaScript program where the program takes a random integer between 1 to 10,
//the user is then prompted to input a guess number. If the user input matches with guess number,
//the program will display a message "Good Work" otherwise display a message "Not matched".
const guessRandomNumber = () => {
  let isPrmt = true;
  while(isPrmt) {
    let prmt = prompt('Enter a number from 1 to 10');
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    if (prmt === null) {
      alert('You have left game')
      break;
    } 
    prmt = +prmt;
    if (isNaN(prmt)) {
      alert('Its not a number');
    } else if (randomNumber === prmt) {
      alert('Good Work');
      isPrmt = false;
    } else {
      alert('Not matched');
    }
  }
}
//Write a JavaScript program to calculate days left until next Christmas.
const daysLeftToChristmas = () => {
  let date = new Date();
  let amountOfDays = date.getDate();
  if (date.getFullYear() % 4 === 0) {
    for (let i = 0; i < date.getMonth(); i++) {
      amountOfDays += leapYear[i];
    }
    return 372 - amountOfDays;
  } else {
    for (let i = 0; i < date.getMonth(); i++) {
      amountOfDays += notLeapYear[i];
    }
    return 371 - amountOfDays;
  }
 }
 // Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let divide = document.getElementById('divide');
let multyply = document.getElementById('multyply');
let result = document.getElementById('result');

const calculate = () => {
  divide.addEventListener('click', () => {
    result.innerText = +number1.value / +number2.value;
  })
  multyply.addEventListener('click', () => {
    result.innerText = +number1.value * +number2.value;;
  })
}

//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
const convertFromCelciusToFahrenheitAndInvert = (str) => {
  if (str.charAt(str.length - 1) === 'f' || str.charAt(str.length - 1) === 'F') {
    let degrees = +str.slice(0,str.length - 1);
    return 5/9*(degrees-32);;
  } else if (str.charAt(str.length - 1) === 'c' || str.charAt(str.length - 1) === 'C') {
    let degrees = +str.slice(0,str.length - 1);
    return degrees * 1.8 + 32;
  } else {
    console.log('Enter Celsius or Fahrenheit')
  }
}
//Write a JavaScript program to get the website URL (loading page).
let loadWebsiteUrl = () => document.URL
// Write a JavaScript exercise to create a variable using a user-defined name.
const var_name = 'absd';
let n = 4;
this.var_name = n;
console.log(this.var_name)

