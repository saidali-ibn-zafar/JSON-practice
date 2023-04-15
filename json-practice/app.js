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



