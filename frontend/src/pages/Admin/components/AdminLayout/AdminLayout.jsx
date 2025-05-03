import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar  from '../AdminSidebar/AdminSidebar';
import './AdminLayout.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AdminLayout = () => {
  return (
      <div className="admin-layout">
        <AdminNavbar/>
        <AdminSidebar />

      <div className="admin-main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
