import studentModel from "../models/studentModel.js";
import courseModel from "../models/courseModel.js"; // ✅ Renamed here
import bcrypt from "bcrypt";
import validator from "validator";

export const addStudent = async (req, res) => {
    const {
        name,
        email,
        password,
        phone,
        address,
        courses, // Expecting an array of course IDs
        joinDate,
        gender,
        fatherName,
        motherName,
        dob,
        image,
        totalFee,
        paidFee
    } = req.body;

    // Validate required fields
    if (
        !name || !email || !password || !phone || !address || !courses ||
        !joinDate || !gender || !fatherName || !motherName || !dob || !image
    ) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // check courses exist in dtabase
    const courseExist = await courseModel.find({ _id: { $in: courses } });

    if (courseExist.length !== courses.length) {
        return res.status(400).json({ success: false, message: "Some courses do not exist" });
    }

    
    try {
        // Check if the student already exists
        const existStudent = await studentModel.findOne({ email });
        if (existStudent) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new student record
        const newStudent = new studentModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            courseEnrolled: courses, // Array of course IDs
            joinDate: new Date(joinDate),
            gender,
            fatherName,
            motherName,
            dob: new Date(dob),
            image,
            totalFee,
            paidFee
        });

        // Save the student record
        await newStudent.save();

        // Update the courses to reflect the new student's enrollment
        for (let courseId of courses) {
            await courseModel.findByIdAndUpdate(courseId, {
                $push: {
                    studentsEnrolled: {
                        studentId: newStudent._id,
                        enrollmentDate: new Date(joinDate),
                    },
                },
            });
        }

        // Respond with success message
        res.status(201).json({ success: true, message: "Student added successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error occurred", error: error.message });
    }
};



export const removeStudent = async (req, res) => {
    const { id } = req.params;  // Getting the ID from request parameters

    try {
        // Find the student by ID
        const student = await studentModel.findById(id);

        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        // Remove student from the courses they are enrolled in
        for (let courseId of student.courseEnrolled) {
            await courseModel.findByIdAndUpdate(courseId, {
                $pull: {
                    studentsEnrolled: { studentId: student._id }
                }
            });
        }

        // Delete the student record
        await studentModel.findByIdAndDelete(id);

        // Respond with success message
        res.status(200).json({ success: true, message: "Student deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error occurred while deleting student", error: error.message });
    }
};



export const getAllStudent = async (req, res) => {
    try {
        // Fetch all students from the database
        const students = await studentModel.find({});

        // Check if there are no students
        if (students.length === 0) {
            return res.status(404).json({ success: false, message: "No students found" });
        }

        // Return success message with students data
        return res.status(200).json({ success: true, message: "Successfully fetched students", students });
    } catch (error) {
        // Log error and send response with error message
        console.error(error);
        res.status(500).json({ success: false, message: "Error occurred while fetching students", error: error.message });
    }
};

export const updateStudent = async(req,res) =>{
    const {id} = req.body;

}


