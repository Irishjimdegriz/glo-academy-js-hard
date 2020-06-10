'use strict';

const cropString = function(argument) {
  if (typeof argument !== 'string' || isNumeric(+argument)) {
    return 'Передана не строка';
  } else {
    let result = argument.trim();

    if (result.length > 30) {
      return result.substring(0, 30) + '...';
    } else {
      return result;
    }
  }
}

console.log(cropString(prompt('Введите аргумент')));

console.log('Собственная проверка:');
console.log(cropString(1));
console.log(cropString("Проверка"));
console.log(cropString("     Проверка         "));
console.log(cropString("Корабли лавировали, лавировали, да не вылавировали"));

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}