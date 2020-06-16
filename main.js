'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let endings = [['ов', '', 'а'], ['', 'а', 'ы'], ['', 'а', 'ы']];

const getTime = (value, mode) => {
  let measurementItem = mode === 0 ? 'час' : (mode === 1 ? 'минут' : 'секунд');
  
  if (value >= 11 && value <= 19) {
    measurementItem += endings[mode][0];
  } else {
    let remainder = value % 10;

    if (remainder === 0 || remainder >= 5) {
      measurementItem += endings[mode][0];
    } else if (remainder === 1) {
      measurementItem += endings[mode][1];
    } else if (remainder >= 2 && remainder <= 4) {
      measurementItem += endings[mode][2];
    }
  }

  return `${value} ${measurementItem}`;
}; 

const customPadStart = (value, length, placeholder) => {
  let result,
      stringValue = value.toString();

  if (stringValue.length < length) {
    result = placeholder * (length - stringValue.length) + stringValue;
  } else {
    result = value;
  }

  return result;
}

let timerId = setInterval(() => {
  let d = new Date();
  let n = d.getDay() - 1;

  n = n < 0 ? 6 : n;    // для запуска в воскресенье
  console.log("Сегодня " + week[n] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " года, " + getTime(d.getHours(), 0) + " " + getTime(d.getMinutes(), 1) + " " + getTime(d.getSeconds(), 2));
  // console.log(d.getDate().toString().padStart(2, '0') + "." + d.getMonth().toString().padStart(2, '0') + "." + d.getFullYear().toString() + " - " + d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0') + ":" + d.getSeconds().toString().padStart(2, '0')); 
  console.log(customPadStart(d.getDate(), 2, '0') + "." + customPadStart(d.getMonth(), 2, '0') + "." + d.getFullYear().toString() + " - " + customPadStart(d.getHours(), 2, '0') + ":" + customPadStart(d.getMinutes(), 2, '0') + ":" + customPadStart(d.getSeconds(), 2, '0')); 
}, 1000);

// let timerId = setInterval(console.log(`Сегодня ${week[n]}, ${d.getDate} ${d.getMonth} ${d.getFullYear} года, ${getTime(d.getHours(), 0)}` ${getTime(d.getMinutes(), 1)}` ${getTime(d.getSeconds(), 2)}`), 1000);

// while(true) {
//   let hours = d.getHours();
//   let minutes = d.getMinutes();
//   let seconds = d.getSeconds();

//   console.log(`Сегодня ${week[n]}, ${d.getDate} ${d.getMonth} ${d.getFullYear} года, ${getTime(hours, 0)}` ${getTime(minutes, 1)}` ${getTime(seconds, 2)}`);
// }


// for (let i = 0; i < week.length; i++) {
//   let style = '';
//   let resultText = week[i]

//   if (i > 4) {
//     style = "font-style: italic;";
//     resultText = resultText.italics();
//   }

//   if (i === n) {
//     style += "font-weight: bold;";
//     resultText = resultText.bold();
//   }

//   console.log('%c' + week[i], style);

//   let elem = document.createElement("p");
//       elem.innerHTML = resultText;

//   let myDiv = document.getElementById("days-of-week");
//   document.body.insertBefore(elem, myDiv);
// }