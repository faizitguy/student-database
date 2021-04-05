const Student = require("../models/students");
const { validationResult } = require("express-validator");

const getStudents = (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
  // res.json(res.pagination);
};

const addStudent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() });
  }
  const { id, fname, lname, age, city, phone, email } = req.body;
  const newStudent = new Student({ id, fname, lname, age, city, phone, email });

  newStudent
    .save()
    .then(() => res.json("Student Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updateStudent = (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.id = req.body.id;
      student.fname = req.body.fname;
      student.lname = req.body.lname;
      student.age = req.body.age;
      student.city = req.body.city;
      student.phone = req.body.phone;
      student.email = req.body.email;

      student
        .save()
        .then(() => res.json("Student updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteStudent = (req, res) => {
  console.log(req.params.id, "req.params.id");
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getStudents, addStudent, updateStudent, deleteStudent };
