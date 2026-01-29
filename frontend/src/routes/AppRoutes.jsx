import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserRoutes from '../modules/user/userRoutes';
import VendorRoutes from '../modules/vendor/vendorRoutes';
import AdminRoutes from '../modules/admin/adminRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Default redirect to user home */}
            <Route path="/" element={<Navigate to="/user" replace />} />

            {/* Module Routes */}
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/vendor/*" element={<VendorRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />

            {/* 404 Fallback */}
            <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
    );
};

export default AppRoutes;
