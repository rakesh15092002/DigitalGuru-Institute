import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Login Form Submitted:", data);
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onSubmitHandler} className="login-popup-container">
                <div className="login-popup-title">
                    <h1>Login</h1>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>

                {/* Input Fields */}
                <div className="login-popup-input">
                    <input type="email" name="email" placeholder="Email" value={data.email} onChange={onChangeHandler} />
                    <input type="password" name="password" placeholder="Password" value={data.password} onChange={onChangeHandler} />
                </div>

                <button type="submit">Login</button>

                {/* Terms and Conditions */}
                <div className="login-popup-reset">
                    <p><span>Reset Password</span></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;
