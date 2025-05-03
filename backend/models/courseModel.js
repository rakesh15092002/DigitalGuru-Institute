import mongoose from "mongoose";
import Student from "./studentModel.js";

const { Schema } = mongoose;    

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    studentsEnrolled: [
        {
          studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student", // Reference to Student model
          },
          enrollmentDate: {
            type: Date,
            default: Date.now,
          },
        },
      ],


})

export const course = mongoose.models.course || mongoose.model("course", courseSchema);
export default course;
// Compare this snippet from backend/models/studentModel.js:

