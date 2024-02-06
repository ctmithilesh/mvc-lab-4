const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
    course_name: String,
    course_price: Number,
    instructors: Array,
    university_name: String
})

courseSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Courses = mongoose.model("Courses", courseSchema);

module.exports = Courses;