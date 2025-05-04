import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageStudent.css';

const ManageStudent = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    { id: 1, name: 'Rakesh Maurya', course: 'CCC', paidFee: 3000 },
    { id: 2, name: 'Priya Sharma', course: 'Tally', paidFee: 2500 },
    { id: 3, name: 'Aman Verma', course: 'DSA', paidFee: 5000 },
    { id: 4, name: 'Anjali Yadav', course: 'Excel', paidFee: 2200 },
    { id: 5, name: 'Sandeep Singh', course: 'ADCA', paidFee: 4000 },
    { id: 6, name: 'Pooja Verma', course: 'Photoshop', paidFee: 2800 },
  ]);

  const handleEdit = (id) => {
    navigate(`/admin/edit-student/${id}`);
  };

  const handleRemove = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this student?");
    if (confirmDelete) {
      setStudents(prev => prev.filter(student => student.id !== id));
    }
  };

  return (
    <div className='manage-student'>
      <div className="headin-registration">
        <h2>Student Course Fee Details</h2>
        <div className="registration-button">
          <button onClick={() => navigate('/admin/register-student')}>New Registration</button>
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
                <button className='edit-btn' onClick={() => handleEdit(student.id)}>Edit</button>
                <button className='remove-btn' onClick={() => handleRemove(student.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudent;
