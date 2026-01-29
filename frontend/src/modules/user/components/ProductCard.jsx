import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { formatPrice } from '../../../utils/formatPrice';

const ProductCard = ({ product }) => {
    const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();

    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col h-full relative group hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150?text=' + product.name;
                    }}
                />
                <div className="absolute bottom-1 left-1 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] uppercase font-bold text-gray-500 shadow-sm border border-gray-100">
                    12 MINS
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight min-h-[2.5em]" title={product.name}>
                        {product.name}
                    </h3>
                </div>

                <p className="text-xs text-gray-500 mb-3">{product.weight}</p>

                <div className="mt-auto flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 line-through">₹{product.price + 10}</span>
                        <span className="text-sm font-bold text-gray-900">{formatPrice(product.price)}</span>
                    </div>

                    {quantity === 0 ? (
                        <button
                            onClick={() => addToCart(product)}
                            className="px-4 py-1.5 rounded-lg border border-[#0c831f] text-[#0c831f] text-sm font-bold bg-[#f7fff9] hover:bg-[#0c831f] hover:text-white transition-colors uppercase"
                        >
                            Add
                        </button>
                    ) : (
                        <div className="flex items-center bg-[#0c831f] text-white rounded-lg overflow-hidden h-8 shadow-sm">
                            <button
                                onClick={() => decrementQuantity(product.id)}
                                className="px-2 h-full hover:bg-[#0b751c] flex items-center justify-center transition-colors"
                            >
                                <Minus size={14} strokeWidth={3} />
                            </button>
                            <span className="px-1 text-xs font-bold min-w-[20px] text-center">{quantity}</span>
                            <button
                                onClick={() => incrementQuantity(product.id)}
                                className="px-2 h-full hover:bg-[#0b751c] flex items-center justify-center transition-colors"
                            >
                                <Plus size={14} strokeWidth={3} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
