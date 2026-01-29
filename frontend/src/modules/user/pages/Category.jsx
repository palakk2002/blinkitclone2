import React from 'react';
import { useParams, Link } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import ProductCard from '../components/ProductCard';
import { products } from '../../../mock/products';
import { categories } from '../../../mock/categories';
import { ChevronRight } from 'lucide-react';

const Category = () => {
    const { id } = useParams();
    const category = categories.find(c => c.id === id);
    const categoryProducts = products.filter(p => p.categoryId === id);

    if (!category) {
        return (
            <div className="min-h-screen bg-gray-50">
                <UserNavbar />
                <div className="max-w-7xl mx-auto px-4 py-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
                    <Link to="/user" className="text-[#0c831f] hover:underline mt-4 inline-block">Go Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <UserNavbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Link to="/user" className="hover:text-[#0c831f]">Home</Link>
                    <ChevronRight size={16} className="mx-2" />
                    <span className="font-medium text-gray-800">{category.name}</span>
                </div>

                {/* Category Header */}
                <div className="flex items-center mb-8 border-b border-gray-200 pb-2">
                    <h1 className="text-2xl font-bold text-gray-800">{category.name}</h1>
                    <span className="ml-4 text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{categoryProducts.length} Products</span>
                </div>

                {/* Products Grid */}
                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
                        {categoryProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Category;
