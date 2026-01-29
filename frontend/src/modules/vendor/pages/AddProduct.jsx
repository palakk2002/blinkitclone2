import React, { useState } from 'react';
import VendorNavbar from '../components/VendorNavbar';
import { categories } from '../../../mock/categories';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Product added successfully!');
        setFormData({
            name: '',
            price: '',
            category: '',
            description: '',
            image: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <VendorNavbar />

            <div className="flex-1 ml-64 p-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
                    <p className="text-gray-500">Create a new listing for your store</p>
                </header>

                <div className="max-w-2xl bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0c831f] focus:border-[#0c831f] sm:text-sm"
                                placeholder="e.g. Amul Butter 500g"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0c831f] focus:border-[#0c831f] sm:text-sm"
                                    placeholder="0.00"
                                />
                            </div>

                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0c831f] focus:border-[#0c831f] sm:text-sm"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                value={formData.description}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0c831f] focus:border-[#0c831f] sm:text-sm"
                                placeholder="Product details..."
                            />
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input
                                type="url"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0c831f] focus:border-[#0c831f] sm:text-sm"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#0c831f] hover:bg-[#0b751c] text-white py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all font-medium text-lg"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
