const express = require("express");
const router = new express.Router();
const Student = require("../../models/students")

// Create Data
router.post("/students", async (req, res) => {
    try {
        const stud = new Student(req.body)
        const studResult = await stud.save();
        res.status(201).send(studResult);
    } catch (error) {
        res.status(400).send(error);
    }
})
// Get all Data
router.get("/students", async (req, res) => {
    try {
        const stud = await Student.find();
        res.status(201).send(stud);
    } catch (error) {
        res.status(400).send(e);
    }
})
// Get single Data with Id
router.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const stud = await Student.findById(_id);
        res.status(201).send(stud);
    } catch (error) {
        res.status(400).send(e);
    }
})
router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        if (!updateStudent) {
            return res.status(201).send();
        }
        res.send(updateStudent);
    } catch (error) {
        res.status(400).send(e);
    }
})
// Remove data with id
router.delete("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const stud = await Student.findByIdAndDelete(_id);
        if (!stud) {
            return res.status(201).send();
        }
        res.send(stud);
    } catch (error) {
        res.status(400).send(e);
    }
})

module.exports = router;

