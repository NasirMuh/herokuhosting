const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Is already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error("inValid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 5
    },
    address: {
        type: String,
        required: true
    }
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
