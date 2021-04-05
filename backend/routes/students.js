const express = require("express");
const Student = require("../config/db");
const mongoose = require("mongoose");
const router = express.Router();
const { body, validationRequest } = require("express-validator");

const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student-controller");

router.get("/", getStudents);
router.post("/", [body("fname").isLength({ min: 3 })], addStudent);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    // if (endIndex < (await model.find().length)) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
    // }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      results.current = await model.find().limit(limit).skip(startIndex).exec();
      res.pagination = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

module.exports = router;
