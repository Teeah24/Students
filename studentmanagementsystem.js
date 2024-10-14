const express = require('express');

const app = express();  // Initialize an Express app

const port = 4000;      // Define the port

app.use(express.json()); // Middleware to parse JSON bodies
let students = [
    { id: 1, name: 'Emmanuel Praise', age: 19, courses: 'Lis112,Lis114,Lis115'},

    { id: 2, name: 'Owolarafe Grace', age: 17, courses: 'Lis123,Lis121,Lis124'},

    { id: 3, name: 'Ogbewe Wisdom', age: 20, courses: 'Lis314,Lis318,Lis319'}
];
app.post('/students', (req,res) => {
    const { name, age, courses } = req.body;
    const newStudent = { id: students.length + 1, name: name, age: age, courses: courses};
    students.push(newStudent);
    res.status(201).json(newStudent);
});
app.get('/students', (req,res) => {
res.json(students);
});

app.put('/students/:id', (req,res) => {
const student = students.find(s => s.id === parseInt(req.params.id));
if (!student) {
return
 res.status(404).json({ message: 'Student not found'});

}
const { name, age, courses} = req.body;
student.name = name // student.name;
student.age = age // student.age;
student.courses = courses // student.courses;
res.json(student);
});
app.delete('/students/:id', (req,res) => {
const studentIndex = students.findIndex(s=> s.id ===parseInt(req.params.id));
if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found'});
}
students.splice(studentIndex, 1);
res.json({message: 'Student deleted'});
});
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
  
  });