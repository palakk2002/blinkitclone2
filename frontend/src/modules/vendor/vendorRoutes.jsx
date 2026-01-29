import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorDashboard from './pages/VendorDashboard';
import AddProduct from './pages/AddProduct';
import VendorProducts from './pages/VendorProducts';

const VendorRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<VendorDashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products" element={<VendorProducts />} />
        </Routes>
    );
};

export default VendorRoutes;
