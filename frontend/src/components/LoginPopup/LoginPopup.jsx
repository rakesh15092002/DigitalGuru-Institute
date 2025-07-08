import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import StoreContext from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    email: "",
    password: "",
    userType: "", // student | faculty | admin
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // ✅ Determine route based on userType
    let route;
    if (data.userType === "student") route = "/api/student/login";
    else if (data.userType === "faculty") route = "/api/faculty/login";
    else if (data.userType === "admin") route = "/api/admin/login";
    else {
      toast.error("Please select a user type");
      return;
    }

    try {
      const res = await axios.post(url + route, data);
      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful!");
        setShowLogin(false);
      } else {
        toast.error(res.data.message || "Login failed!");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onSubmitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h1>Login</h1>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>

        <div className="login-popup-input">
          {/* ✅ Radio Inputs */}
          <div className="radio-section">
            <div className="radio-section-content">
              <input
                type="radio"
                name="userType"
                value="student"
                checked={data.userType === "student"}
                onChange={onChangeHandler}
              />
              <span>Student</span>
            </div>
            <div className="radio-section-content">
              <input
                type="radio"
                name="userType"
                value="faculty"
                checked={data.userType === "faculty"}
                onChange={onChangeHandler}
              />
              <span>Faculty</span>
            </div>
            <div className="radio-section-content">
              <input
                type="radio"
                name="userType"
                value="admin"
                checked={data.userType === "admin"} // ✅ fixed this
                onChange={onChangeHandler}
              />
              <span>Admin</span>
            </div>
          </div>

          {/* Email & Password */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={onChangeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
          />
        </div>

        <button type="submit">Login</button>

        <div className="login-popup-reset">
          <p><span>Reset Password</span></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
