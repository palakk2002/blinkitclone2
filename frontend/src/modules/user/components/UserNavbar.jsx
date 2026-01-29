import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';
import { useCart } from '../../../context/CartContext';

const UserNavbar = () => {
    const { cartCount, cartTotal } = useCart();

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/user" className="flex items-center">
                        <span className="text-4xl font-bold text-[#fec107] tracking-tight">blink</span>
                        <span className="text-4xl font-bold text-[#0c831f] tracking-tight">it</span>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#0c831f] focus:border-[#0c831f] sm:text-sm"
                        />
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-6">
                        <div className="text-gray-700 hover:text-[#0c831f] cursor-pointer flex flex-col items-center">
                            <span className="text-lg font-medium">Login</span>
                        </div>

                        {/* Cart Button */}
                        <Link to="/user/cart">
                            <button className="bg-[#0c831f] hover:bg-[#0b751c] text-white px-5 py-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 font-medium">
                                <ShoppingCart className="h-5 w-5" />
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="text-xs font-bold">{cartCount} items</span>
                                    <span className="text-sm">₹{cartTotal}</span>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Search - Visible only on small screens */}
            <div className="md:hidden px-4 pb-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#0c831f] focus:border-[#0c831f] sm:text-sm"
                    />
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;
