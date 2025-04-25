import React, { useEffect, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        userType: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", data);
    };

    useEffect(() => {
        console.log("Data Updated:", data);
    }, [data]);

    return (
        <div className='login-popup'>
            <form onSubmit={onSubmitHandler} className="login-popup-container">
                <div className="login-popup-title">
                    <h1>{currState}</h1>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>

                {/* Radio Button Group */}
                <div className="login-popup-radio">
                    <input type="radio" id="employee" name="userType" value="employee" onChange={onChangeHandler} />
                    <label htmlFor="employee">Employee</label>

                    <input type="radio" id="student" name="userType" value="student" onChange={onChangeHandler} />
                    <label htmlFor="student">Student</label>

                    <input type="radio" id="admin" name="userType" value="admin" onChange={onChangeHandler} />
                    <label htmlFor="admin">Admin</label>
                </div>

                {/* Input Fields */}
                <div className="login-popup-input">
                    {currState === "Sign Up" &&
                        <input type="text" name="name" placeholder="Your name" value={data.name} onChange={onChangeHandler} />
                    }
                    <input type="email" name="email" placeholder="Email" value={data.email} onChange={onChangeHandler} />
                    <input type="password" name="password" placeholder="Password" value={data.password} onChange={onChangeHandler} />
                </div>

                <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

                {/* Toggle between Login and Sign Up */}
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}


                {/* Terms and Conditions */}
                <div className="login-popup-reset">
                    <p><span>Reset Password</span></p>


                </div>

            </form>
        </div>
    );
};

export default LoginPopup;
