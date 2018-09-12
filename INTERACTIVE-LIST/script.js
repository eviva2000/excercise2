"use strict";

// window.addEventListener("DOMContentLoaded", init);
// const listSection=document.querySelector('#list h2');
// function init() {
//   fetch("list.json")
//     .then(res => res.json())
//     .then(json => show(json));
// }

// function show(data) {
// //  console.log(data);
//     data.forEach(function(item){
//      initialList.push(item)
//     })
// }

const initialList = [
  "ElÃ­sabet RÃ³s ValsdÃ³ttir",
  "Ekaterina Gerhardt-Pedersen",
  "Alberto Pacheco",
  "Jacob Frank Kristensen",
  "Lars Olivier Edouard Ljungdahl Albert",
  "Elaheh Arjomandi",
  "Mathilde Bernadette Valerie Frachon",
  "Karoline Meyer-Jacobsen",
  "Tiril Key Grimsrud",
  "Yan Li",
  "Larisa Ailisoaie",
  "Andrei-Stefan Atudorei",
  "Mihai-Razvan Bertea",
  "MÃ¡ria CambÃ¡lovÃ¡",
  "Magnus BergstrÃ¸m Carlsen",
  "Ovidiu-Mihail Constantin",
  "Nicklas Hvid Degnebolig",
  "Rytis Drazdauskas"
];

const studentList = [];
console.log(initialList);

//----STUDENT TEMPLATE------
const Student = {
  name: " ",
  lastName: " ",

  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};

//----CREATING STUDENTS FROM THE TEMPLATE WITHIN THE INITIAL ARRAY-----
function createStudents() {
  initialList.forEach(function(name) {
    const newstudent = Object.create(Student);
    newstudent.splitName(name);
    studentList.push(newstudent);
  });
  // studentList.sort(sortByLastName);
  studentList.sort();
}

createStudents();
console.table(studentList);

function creatlist() {
  initialList.forEach(function(index) {
    console.log(index);
    let mydiv = document.createElement("div");
    mydiv.setAttribute("id", "div1");
    mydiv.innerHTML = "<li class='fa'>&#xf1f8;</li><br>";
    let h3 = document.createElement("h3");
    h3.textContent = index;
    let element = document.getElementById("list");
    element.appendChild(h3);
    element.appendChild(mydiv);
  });
}
creatlist();
