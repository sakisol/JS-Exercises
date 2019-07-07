//exercise2.js

document.getElementById("btn").addEventListener("click", random100);

const fillme = [];

function random100() {
  while (fillme.length < 100) {
    //while loop - if this (condition) is true, execute the following...
    const nums = Math.floor(Math.random() * 101 + 1);
    if (fillme.indexOf(nums) === -1) fillme.push(nums);

    document.getElementById("numbersbox").innerHTML = fillme;
  }
  //console.log (fillme)
}

console.log(fillme);
//random100 ()

document.getElementById("btn").addEventListener("click", getEven);

const even = [];
const odd = [];
//
function getEven() {
  for (let i = 0; i < fillme.length; i++) {
    if (fillme[i] % 2 !== 1) {
      even.push(fillme[i]);
      //             console.log(even);
      document.getElementById("evennums").innerHTML = even;
    } else {
      odd.push(fillme[i]);
      //    console.log(odd);
      document.getElementById("oddnums").innerHTML = odd;
    }
  }
}
console.log(even);
console.log(odd);
