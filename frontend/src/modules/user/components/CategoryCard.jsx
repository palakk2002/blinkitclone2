import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/user/category/${category.id}`} className="block group">
            <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-blue-50 rounded-xl mb-3 overflow-hidden transition-transform duration-300 group-hover:scale-105 border border-transparent group-hover:border-blue-100 shadow-sm group-hover:shadow-md">
                    <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150?text=' + category.name;
                        }}
                    />
                </div>
                <span className="text-center text-gray-700 font-medium text-sm sm:text-base leading-tight group-hover:text-[#0c831f] transition-colors">
                    {category.name}
                </span>
            </div>
        </Link>
    );
};

export default CategoryCard;
