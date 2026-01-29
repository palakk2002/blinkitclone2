import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Package, LogOut } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

const VendorNavbar = () => {
    const location = useLocation();
    const { logout } = useAuth();

    const isActive = (path) => {
        return location.pathname === path ? 'bg-[#0c831f] text-white' : 'text-gray-600 hover:bg-green-50 hover:text-[#0c831f]';
    };

    return (
        <div className="w-64 bg-white min-h-screen border-r border-gray-200 fixed left-0 top-0 flex flex-col z-30">
            <div className="h-20 flex items-center px-8 border-b border-gray-200 mb-6">
                <span className="text-2xl font-bold text-[#fec107]">Vendor</span>
                <span className="text-2xl font-bold text-[#0c831f]">Panel</span>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                <Link to="/vendor" className={`flex items-center px-4 py-3 rounded-lg transition-colors font-medium ${isActive('/vendor')}`}>
                    <LayoutDashboard className="mr-3 h-5 w-5" />
                    Dashboard
                </Link>
                <Link to="/vendor/add-product" className={`flex items-center px-4 py-3 rounded-lg transition-colors font-medium ${isActive('/vendor/add-product')}`}>
                    <PlusCircle className="mr-3 h-5 w-5" />
                    Add Product
                </Link>
                <Link to="/vendor/products" className={`flex items-center px-4 py-3 rounded-lg transition-colors font-medium ${isActive('/vendor/products')}`}>
                    <Package className="mr-3 h-5 w-5" />
                    My Products
                </Link>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <Link to="/user" onClick={logout} className="flex items-center px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors font-medium">
                    <LogOut className="mr-3 h-5 w-5" />
                    Back to App
                </Link>
            </div>
        </div>
    );
};

export default VendorNavbar;
