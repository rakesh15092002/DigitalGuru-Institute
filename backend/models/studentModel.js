import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    joinDate:{
        type:Date,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    fatherName:{
        type:String,
        required:true,
    },
    motherName:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },

});

export const student = mongoose.models.student || mongoose.model("student",studentSchema);
export default student;