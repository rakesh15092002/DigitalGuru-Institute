import studentModel from "../models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

// Function to generate JWT token
const createToken = (id) => jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
);

// ✅ Fixed: Login a student
export const studentLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const student = await studentModel.findOne({ email });

        if (!student) {
            return res.json({ success: false, message: "User does not exist" });
        }

        // Match the password
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Generate token
        const token = createToken(student._id);

        res.json({ success: true, message: "Login successful hai", token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Something went wrong" });
    }
};

// ✅ Fixed: Register a student
export const studentRegister = async (req, res) => {
    const { name, email, password, phone, address, course, joinDate, gender, fatherName, motherName, dob, image } = req.body;

    if (!name || !email || !password || !phone || !address || !course || !joinDate || !gender || !fatherName || !motherName || !dob || !image) {
        return res.json({ success: false, message: "All fields are required" });
    }

    try {
        const existStudent = await studentModel.findOne({ email });
        if (existStudent) {
            return res.json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new student object
        const newStudent = new studentModel({
            name,
            email,
            password: hashedPassword,  // Use hashedPassword here
            phone,
            address,
            course,
            joinDate: new Date(joinDate),  // Convert string to Date
            gender,
            fatherName,
            motherName,
            dob: new Date(dob),  // Convert string to Date
            image,
        });



        const student = await newStudent.save();
        const token = createToken(student._id); // ✅ Token generated after saving

        res.json({ success: true, message: "Registration successful", token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error occurred" });
    }
};


// Get student profile
export const  studentProfile = async (req,res) =>{
    const {studentId} = req.body;
    try {
        const student = await studentModel.findById(studentId);
        if (!student) {
            return res.json({ success: false, message: "Student not found" });
        }
        res.json({ success: true, student });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error occurred" });
    }
}
