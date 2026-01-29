import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import { users } from '../../../mock/users';
import { Check, X } from 'lucide-react';

const ManageVendors = () => {
    const vendorUsers = users.filter(user => user.role === 'vendor');

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <AdminNavbar />

            <div className="flex-1 ml-64 p-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Manage Vendors</h1>
                    <p className="text-gray-500">View and manage store partners</p>
                </header>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proprietor</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {vendorUsers.map((vendor) => (
                                <tr key={vendor.id}>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        {vendor.storeName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {vendor.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {vendor.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${vendor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                                        >
                                            {vendor.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        {vendor.status === 'Pending' ? (
                                            <div className="flex justify-end space-x-3">
                                                <button className="text-green-600 hover:text-green-900 flex items-center">
                                                    <Check size={16} className="mr-1" /> Approve
                                                </button>
                                                <button className="text-red-600 hover:text-red-900 flex items-center">
                                                    <X size={16} className="mr-1" /> Reject
                                                </button>
                                            </div>
                                        ) : (
                                            <button className="text-gray-400 hover:text-gray-600">Details</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageVendors;
