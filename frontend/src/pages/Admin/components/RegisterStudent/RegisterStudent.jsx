import React from 'react'
import './RegisterStudent.css';


const RegisterStudent = () => {
    return (
        <div className='register-student-page'>
            <div className="rs-student-content">
            <h1>Register new Student</h1>
                <form action="">
                    <div className="student-information-section">
                        <div className="student-info">
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                        </div>
                        <div className="student-info">
                            <input type="text" placeholder='Father Name' />
                            <input type="text" placeholder='Mother Name' />
                        </div>

                        <div className="student-DOB">
                            <input type="text" />
                        </div>

                    </div>

                    <div className="student-address-section">
                        <div className="student-address">
                            <input type="text" placeholder='Address' />
                        </div>
                        <div className="student-info">
                            <input type="text" placeholder='city' />
                            <input type="text" placeholder='pin code' />
                        </div>
                    </div>


                    <div className="student-contact-section">
                        <div className="student-info">
                            <input type="text" email />
                            <input type="text" placeholder='' />
                        </div>
                    </div>

                    <div className="student-course-section">

                    </div>

                </form>
            </div>

        </div>
    )
}

export default RegisterStudent
