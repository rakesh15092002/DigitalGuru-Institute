import React from 'react'
import './AdminNavbar.css';
const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="admin-navbar-left">
        <h2>Admin Panel</h2>
      </div>
      <div className="admin-navbar-right">
        <button className="admin-logout-btn">Logout</button>
      </div>
    </div>
  )
}

export default AdminNavbar
