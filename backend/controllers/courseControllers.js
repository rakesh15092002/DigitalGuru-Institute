import course from "../models/courseModel.js";
import student from "../models/studentModel.js";

// import student from "../models/studentModel.js";

// add courses
export const addCourse = async (req, res) => {
    const { name, duration, fees, description, image } = req.body;

    if (!name || !duration || !fees || !description || !image) {
        return res.json({ success: false, message: "All fields are required" });
    }

    try {
        const existCourse = await course.findOne({ name });
        if (existCourse) {
            return res.json({ success: false, message: "Course already exists" });
        }

        const newCourse = new course({
            name,
            duration,
            fees,
            description,
            image,
            // studentsEnrolled: [], // Initialize with an empty array
        });

        await newCourse.save();
        return res.json({ success: true, message: "Course added successfully" });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Something went wrong" });
    }
}

// get all courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await course.find({});
        return res.json({ success: true, courses });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Something went wrong" });
    }
}

// Delete course
export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.json({ success: false, message: "Course ID is required" });
    }

    try {
        const courseToDelete = await course.findByIdAndDelete(id);
        if (!courseToDelete) {
            return res.json({ success: false, message: "Course not found" });
        }

        return res.json({ success: true, message: "Course deleted successfully" });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Something went wrong" });
    }
}

// Enroll in course

