import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import { Users, Store, AlertTriangle } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <AdminNavbar />

            <div className="flex-1 ml-64 p-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                    <p className="text-gray-500">Platform Overview</p>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Users</p>
                            <h3 className="text-2xl font-bold text-gray-800">1,240</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                            <Store size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Active Vendors</p>
                            <h3 className="text-2xl font-bold text-gray-800">54</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Pending Verifications</p>
                            <h3 className="text-2xl font-bold text-gray-800">12</h3>
                        </div>
                    </div>
                </div>

                {/* System Health */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">System Status</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                            <span className="font-bold text-green-700 block mb-1">Frontend Service</span>
                            <span className="text-sm text-green-600">Operational - 100% Uptime</span>
                        </div>
                        <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                            <span className="font-bold text-green-700 block mb-1">Database Service</span>
                            <span className="text-sm text-green-600">Operational - 99.9% Uptime</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
