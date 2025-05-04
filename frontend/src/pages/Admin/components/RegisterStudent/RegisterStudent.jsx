import React, { useState } from 'react';
import './RegisterStudent.css';

const RegisterStudent = () => {
  const courses = ['CCC', 'DCA', 'DSA', 'Tally', 'Excel', 'Photoshop', 'ADCA', 'O Level'];
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseChange = (event) => {
    const course = event.target.value;
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className='register-student-page'>
      <div className="rs-student-content">
        <h1>Register New Student</h1>
        <form>
          {/* Student Info */}
          <div className="student-information-section">
            <h2>Student Information</h2>
            <div className="student-info">
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
            </div>
            <div className="student-info">
              <input type="text" placeholder='Father Name' />
              <input type="text" placeholder='Mother Name' />
            </div>
            <div className="student-DOB">
              <input type="text" placeholder='DOB' />
            </div>
          </div>

          {/* Address */}
          <div className="student-address-section">
            <h2>Student Address</h2>
            <div className="student-address">
              <input type="text" placeholder='Address' />
            </div>
            <div className="student-info">
              <input type="text" placeholder='City' />
              <input type="text" placeholder='Pin Code' />
            </div>
          </div>

          {/* Contact */}
          <div className="student-contact-section">
            <h2>Student Contact</h2>
            <div className="student-info">
              <input type="email" placeholder='Email' />
              <input type="text" placeholder='Mobile Number' />
            </div>
          </div>

          {/* Courses */}
          <div className="student-course-section">
            <h2>Select Courses</h2>
            <div className="course-grid">
              {courses.map((course) => (
                <label key={course} className="course-checkbox">
                    {course}
                  <input
                    type="checkbox"
                    value={course}
                    checked={selectedCourses.includes(course)}
                    onChange={handleCourseChange}
                  />
                  
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;
