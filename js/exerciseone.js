//exerciseone js

document.getElementById("btn").addEventListener("click", printInput);

function printInput() {
  const getText = document.getElementById("inputbox").value;

  document.getElementById("empty").innerHTML = getText;

  document.getElementById("alertbox").style.display = "none";

  document
    .getElementById("bottomdiv")
    .setAttribute("style", "background-color: white;");

  if (getText == 0) {
    //        alert("type something!");
    //
    document.getElementById("alertbox").style.display = "block";

    document
      .getElementById("bottomdiv")
      .setAttribute("style", "background-color: red;");
  }
}

printInput();
