
// from JSON format to JS object
// Sample data in JSON format 
const studentJSON = '{"name": "Saidali", "email": "myEmail@gmail.com", "interests": ["street workouts", "JavaScript", "writing books", "getting a short movies"]}';

// Convert JSON string to JS object using JSON.parse function
const student = JSON.parse(studentJSON);

// And then we have an access to display them on the console as a JS object
console.log("Student name: " + student.name);
console.log("Student email: " + student.email);
console.log("Student interests: " + student.interests.join(", "));

// Modifiying the properties of the JS object
student.interests.push("strolling");

// Convert JS obj to JSON string using JSON.stringify function 
const updatedStudentJSON = JSON.stringify(student);

// Display the updated JSON string
console.log("Updated student info in JSON format: " + updatedStudentJSON); 




// ===================== from JS object to JSON format =============================

// js object 
const myObj = {
    name: "Saidali",
    age: 19,
    city: "Andijan"
};

const jsonString = JSON.stringify(myObj);
console.log("JSON String: " + jsonString); // {"name":"Saidali", "age":"19", "city":"Andijan"}





// ===================== SetItem =====================
// create and object to be stored
const person = {
  name: "Saidali",
  age: 19,
  weight: 64,
  height: 1.82
}

// convert the object to JSON string
const personJSON = JSON.stringify(person);

//Store the JSON string in local storage with a key
localStorage.setItem("person", personJSON);

console.log("has been stored in local storage");



// ===================== GetItem =====================
// retrieve the JSON string from local storage using the key
const personJSON2 = localStorage.getItem("person");

// convert the JSON string to an object
const person1 = JSON.parse(personJSON);

console.log("Retrieved item from local storage: ");
console.log(person1);
