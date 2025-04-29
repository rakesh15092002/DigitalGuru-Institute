import studentModel from "../models/studentModel.js";
import bcrypt from "bcrypt";
import validator from "validator";


export const addStudent = async (req, res) => {
    const { name, email, password, phone, address, course, joinDate, gender, fatherName, motherName, dob, image,totalFee,paidFee } = req.body;

    if (!name || !email || !password || !phone || !address || !course || !joinDate || !gender || !fatherName || !motherName || !dob || !image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const existStudent = await studentModel.findOne({ email });
        if (existStudent) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = new studentModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            course,
            joinDate: new Date(joinDate),
            gender,
            fatherName,
            motherName,
            dob: new Date(dob),
            image,
            totalFee,
            paidFee,
            dueFee: totalFee - paidFee
        });

        await newStudent.save();

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

        // Delete the student
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


