"use strict";

// window.addEventListener("DOMContentLoaded", init);
// function init() {
//   fetch("list.json")
//     .then(res => res.json())
//     .then(json=>show(json));
// }

// function show(data) {
//   console.log(data);
// }
const names = [];
const allData = {
  Hufflepuff: [
    "Hannah Abbot",
    "Susan Bones",
    "Justin Finch-Fletchly",
    "Ernie Macmillian",
    "Megan Jones",
    "Wayne Hopkins",
    "Leanne -unknown-"
  ],
  Gryffindor: [
    "Lavender Brown",
    "Seamus Finnigan",
    "Hermione Granger ",
    "Neville Longbottom",
    "Parvati Patil",
    "Harry Potter",
    "Dean Thomas",
    "Ron Weasley"
  ],
  Ravenclaw: [
    "Terry Boot",
    "Mandy Brocklehurst",
    "Padma Patil",
    "Lisa Turpin",
    "Stephen Cornfoot",
    "Anthony Goldstein",
    "Michael Corner",
    "Kevin Entwistle",
    "Sue Li"
  ],
  Slytherin: [
    "Draco Malfoy",
    "Vincent Crabbe",
    "Gregory Goyle",
    "Pansy Parkinson",
    "Millicent Bulstrode",
    "Theodore Nott",
    "Daphne Greengrass",
    "Blais Zabini"
  ]
};

// console.log(allData.Gryffindor);
// allData.Gryffindor.forEach(function(name) {
//   console.log(name);
// });
// ------converting the object to 2 different array-------
const namevalue = Object.values(allData);
console.log(namevalue);

const houses = Object.keys(allData);
// console.log(houses);

namevalue.forEach(function(nameArr) {
  nameArr.forEach(function(name) {
    // console.log(name);
    names.push(name);
  });
});

// console.log(names);
const studentList = [];
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
function createStudents() {
  names.forEach(function(name) {
    const randomhouse = Object.values(houses)[
      Math.floor(Math.random() * Object.values(houses).length)
    ];
    const newstudent = Object.create(Student);
    newstudent.splitName(name);
    newstudent.house = randomhouse;
    studentList.push(newstudent);
  });
  // studentList.sort(sortByLastName);
  studentList.sort(sortByhouse);
}

function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}
createStudents();
console.table(studentList);

// function inGryffindor(student) {
//   if (student.house === houses.Gryffindor) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const gryffindorStudents = students.filter(inGryffindor);
// console.table(gryffindorStudents);

function studentsInHouse(house) {
  const houseStudents = studentList.filter(inHouse);
  function inHouse(student) {
    if (student.house === house) {
      return true;
    } else {
      return false;
    }
  }
  return houseStudents;
}
console.table(studentsInHouse("Slytherin"));

function sortByhouse(a, b) {
  if (a.house < b.house) {
    return -1;
  } else {
    if (a.house > b.house) {
      return 1;
    } else {
      studentList.sort();
    }
  }
}
