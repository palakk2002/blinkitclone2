import React from 'react';
import UserNavbar from '../components/UserNavbar';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { categories } from '../../../mock/categories';
import { products } from '../../../mock/products';

const Home = () => {
    // Get featured products (just taking first 6 for demo)
    const featuredProducts = products.slice(0, 12);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <UserNavbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Ad Banner */}
                <div className="w-full h-48 sm:h-64 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mb-8 flex items-center justify-center text-white shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center p-6">
                        <h2 className="text-3xl sm:text-5xl font-extrabold mb-2 tracking-tight">Mega Savings</h2>
                        <p className="text-lg sm:text-xl font-medium opacity-90">Up to 50% OFF on Grocery & Essentials</p>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-5 pl-1">Shop by Category</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                        {categories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>

                {/* Featured Products Section */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-5 pl-1">Best Sellers</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p>blinkit clone developed with React & Tailwind</p>
                </div>
            </main>
        </div>
    );
};

export default Home;
