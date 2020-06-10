'use strict';

// first
let lang = "en";

if (lang === "ru") {
  console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
}
else if (lang === "en") {
  console.log("monday, tuesday, wednesday, thursday, friday, saturday, sunday");
}

switch (lang) {
  case 'ru':
    console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
    break;
  case 'en':
    console.log("monday, tuesday, wednesday, thursday, friday, saturday, sunday");
    break;
}

let daysOfWeek = [];
daysOfWeek["ru".charCodeAt(0) + "ru".charCodeAt(1)] = "понедельник, вторник, среда, четверг, пятница, суббота, воскресенье";
daysOfWeek["en".charCodeAt(0) + "en".charCodeAt(1)] = "monday, tuesday, wednesday, thursday, friday, saturday, sunday";

console.log(daysOfWeek[lang.charCodeAt(0) + lang.charCodeAt(1)]);

// bonus to first
console.log('a bonus:');

let daysOfWeekObj = { 'ru' : "понедельник, вторник, среда, четверг, пятница, суббота, воскресенье", 'en' : "monday, tuesday, wednesday, thursday, friday, saturday, sunday"};

console.log(daysOfWeekObj[lang]);

// second

let namePerson = 'Артем';

console.log(namePerson === 'Артем' ? "директор" : (namePerson === 'Максим' ? 'преподаватель' : 'студент'));