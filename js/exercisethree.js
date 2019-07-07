//exercise3.js

document.getElementById("btn").addEventListener("click", randomize);

function randomize() {
  let randomIMG = Math.floor(Math.random() * 7);

  console.log(randomIMG);

  document.getElementById("imageid").src = "img/img_" + randomIMG + ".jpg";
}
