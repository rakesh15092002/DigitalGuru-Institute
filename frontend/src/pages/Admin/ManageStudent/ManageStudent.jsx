import React, { useState } from 'react';
import './ManageStudent.css';

const ManageStudent = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rakesh Maurya', course: 'CCC', paidFee: 3000 },
    { id: 2, name: 'Priya Sharma', course: 'Tally', paidFee: 2500 },
    { id: 3, name: 'Aman Verma', course: 'DSA', paidFee: 5000 },
    { id: 1, name: 'Rakesh Maurya', course: 'CCC', paidFee: 3000 },
    { id: 2, name: 'Priya Sharma', course: 'Tally', paidFee: 2500 },
    { id: 3, name: 'Aman Verma', course: 'DSA', paidFee: 5000 },
  ]);


  return (
    <div className='manage-student'>
      <div className="headin-registration">
     <h2>Student Course Fee Details</h2>
      <div className="registration-button">
        <button>New Registration</button>
      </div>
      </div>
     
      <table className='student-table'>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Paid Fee (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.paidFee}</td>
              <td>
                <button className='edit-btn' >Edit</button>
                <button className='remove-btn'>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudent;
