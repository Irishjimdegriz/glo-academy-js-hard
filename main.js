'use strict';

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let d = new Date();
let n = d.getDay() - 1;

n = n < 0 ? 6 : n;    // для запуска в воскресенье

for (let i = 0; i < week.length; i++) {
  let style = '';
  let resultText = week[i]

  if (i > 4) {
    style = "font-style: italic;";
    resultText = resultText.italics();
  }

  if (i === n) {
    style += "font-weight: bold;";
    resultText = resultText.bold();
  }

  console.log('%c' + week[i], style);

  let elem = document.createElement("p");
      elem.innerHTML = resultText;

  let myDiv = document.getElementById("days-of-week");
  document.body.insertBefore(elem, myDiv);
}