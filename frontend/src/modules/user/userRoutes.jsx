import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};

export default UserRoutes;
