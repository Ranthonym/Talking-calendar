let talkingCalendar = function(date) {
//splits the date input into an array of 3 numbers: year, month, day
let splitString = date.split("/");

//stores numerical value of month number
let monthNum = Number(splitString[1]);

//stores numerical value of day number
let dayNum = Number(splitString[2]);

let month = ""; //stores month name
let ordinal = ""; //stores ordinal day suffix

//matches month number to month name
switch(monthNum){
  case 1: month = "January";
      break;
  case 2: month = "February";
      break;
  case 3: month = "March";
      break;
  case 4: month = "April";
      break;
  case 5: month = "May";
      break;
  case 6: month = "June"; 
      break;
  case 7: month = "July";
      break;
  case 8: month = "August";
      break;
  case 9: month = "September";
      break;
  case 10: month = "October";
      break;
  case 11: month = "November";
      break;
  case 12: month = "December";
      break;
  }
  //evaluates correct ordinal suffix to numerical day value e.g "st", "nd", "rd", "th"
  if (dayNum === 11 || dayNum === 12 || dayNum === 13) {
    ordinal = "th";
  } else {
  switch (dayNum % 10) {
    case 1: ordinal = "st";
        break;
    case 2: ordinal = "nd";
        break;
    case 3: ordinal = "rd";
        break;
    default: ordinal =  "th";
  }
}


//returns the calendar date in a more readable format
return (`${month} ${dayNum}${ordinal}, ${splitString[0]}`); //template literal
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2020/02/03"));