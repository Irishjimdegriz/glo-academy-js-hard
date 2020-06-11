'use strict';

// first

let arr = ['111111111', '222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777'];

for (let i = 0; i < arr.length; i++){
  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  }
}

// second
let primeNumbers = [];
let dividersCount = 2;

for (let i = 2; i <= 100; i++) {
  dividersCount = 2;

  for (let j = 0; j < primeNumbers.length; j++){
    if (i % primeNumbers[j] === 0) {
      dividersCount++;
    }
  }

  if (dividersCount === 2) {
    primeNumbers.push(i);
  }
}

for (let i = 0; i < primeNumbers.length; i++) {
  console.log(primeNumbers[i] + ' - делится на 1 и ' + primeNumbers[i] );
}
