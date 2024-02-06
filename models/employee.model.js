const mongoose = require("mongoose");
const empSchema = mongoose.Schema({
    emp_name: {
        type: String,
        required: true 
    },
    emp_permanent_address: {
        type: String,
        required: true 
    },
    emp_temporary_address: {
        type: String,
        required: false 
    },
    emp_contact: {
        type: Number,
        required: true 
    },
    emp_designation: {
        type: String,
        required: true
    },
    emp_department: {
        type: String, 
        required: true 
    }
})

empSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Employees = mongoose.model("Employees", empSchema);

module.exports = Employees;