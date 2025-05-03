import React, { useState } from 'react';
import './ManageCourse.css';

const ManageCourse = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'CCC',
      price: 3000,
      duration: '3 months',
      photo: 'https://via.placeholder.com/60'
    },
    {
      id: 2,
      name: 'DSA',
      price: 5000,
      duration: '4 months',
      photo: 'https://via.placeholder.com/60'
    },
    {
      id: 3,
      name: 'Tally',
      price: 2500,
      duration: '2 months',
      photo: 'https://via.placeholder.com/60'
    },
    {
      id: 4,
      name: 'CCC',
      price: 3000,
      duration: '3 months',
      photo: 'https://via.placeholder.com/60'
    },
    {
      id: 5,
      name: 'DSA',
      price: 5000,
      duration: '4 months',
      photo: 'https://via.placeholder.com/60'
    },
    {
      id: 6,
      name: 'Tally',
      price: 2500,
      duration: '2 months',
      photo: 'https://via.placeholder.com/60'
    }
  ]);

  return (
    <div className='manage-course'>
      <div className="headin-registration">
        <h2>Student Course Fee Details</h2>
        <div className="registration-button">
          <button>Add New Course</button>
        </div>
      </div>
      <div className="course-table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price (₹)</th>
              <th>Duration</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.price}</td>
                <td>{course.duration}</td>
                <td>
                  <img src={course.photo} alt={course.name} width="60" height="40" />
                </td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="remove-btn">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourse;
