import jwt from "jsonwebtoken";

const studentAuth = (req, res, next) => {

    const {token} = req.headers;
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const decoded_token = jwt.verify(token,process.env.JWT_SECRET);
        req.body.studentId = decoded_token.id;
        next();

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export { studentAuth };