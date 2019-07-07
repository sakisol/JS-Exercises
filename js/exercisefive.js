//exercise5.js
//I need a button that every time is clicked, adds a new row in a table.
//But I need that adds a new row with a random color background.

document.getElementById("btn").addEventListener("click", makeColourRow);

function makeColourRow() {
  const table = document.getElementById("colouredrows");

  const row = table.insertRow(1);

  const newrow = row.insertCell(0);

  newrow.innerHTML = "";

  table.appendChild(row);

  //just one color for all
  //row.setAttribute("style", "background-color: yellow; border-style: solid;");
  row.setAttribute("style", "border-style: solid;");

  //these two lines work
  //const colors = ['red', 'green', 'blue', 'orange', 'yellow'];
  //row.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  //the above works

  //rainbow rgb !
  const rgb = [];

  for (let i = 0; i < 3; i++) rgb.push(Math.floor(Math.random() * 255));

  row.style.backgroundColor = "rgb( " + rgb.join(",") + ")";
}

//makeColourRow ()
