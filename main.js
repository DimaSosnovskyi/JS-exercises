let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Write a JavaScript program to display the current day and time in the following format
//  Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
const currentDayAndTime = () => {
  let data = new Date();
  let amOrPm;
  if (data.getHours() < 12) {
    amOrPm = 'AM'
  } else {
    amOrPm = 'PM';
  }
  console.log("Today is " + days[data.getDay()]);
  console.log('Current time is: ' + data.getHours() + amOrPm + " : " + data.getMinutes() + " : " + data.getSeconds());
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





