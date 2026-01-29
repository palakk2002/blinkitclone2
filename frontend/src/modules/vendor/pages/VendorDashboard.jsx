import React from 'react';
import VendorNavbar from '../components/VendorNavbar';
import { ShoppingBag, TrendingUp, Users } from 'lucide-react';

const VendorDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <VendorNavbar />

            <div className="flex-1 ml-64 p-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Vendor Dashboard</h1>
                    <p className="text-gray-500">Welcome back, Fresh Mart Store</p>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                            <ShoppingBag size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Orders</p>
                            <h3 className="text-2xl font-bold text-gray-800">126</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-800">₹45,230</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Products</p>
                            <h3 className="text-2xl font-bold text-gray-800">24</h3>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Placeholder */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#ORD-9923</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Milk, Bread, Eggs</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹245</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#ORD-9924</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Coca Cola (2)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹180</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#ORD-9925</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Atta 5kg</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹340</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Processing</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorDashboard;
