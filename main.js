let num = 266219;
let stringNum = num.toString();
let mulResult = 1;

for (let i = 0; i < stringNum.length; i++) {
  mulResult *= Number(stringNum[i]);
}

mulResult **= 3;
console.log(mulResult.toString().slice(-2));