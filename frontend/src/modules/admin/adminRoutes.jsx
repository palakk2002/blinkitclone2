import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import ManageVendors from './pages/ManageVendors';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/vendors" element={<ManageVendors />} />
        </Routes>
    );
};

export default AdminRoutes;
