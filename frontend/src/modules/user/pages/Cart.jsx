import React from 'react';
import { Link } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import { useCart } from '../../../context/CartContext';
import { formatPrice } from '../../../utils/formatPrice';
import { Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart, cartTotal, clearCart } = useCart();

    const deliveryCharge = 15;
    const grandTotal = cartTotal + deliveryCharge;

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <UserNavbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center mb-6">
                    <Link to="/user" className="mr-4 p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <ArrowLeft size={20} className="text-gray-700" />
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-800">My Cart</h1>
                    {cart.length > 0 && <span className="ml-3 text-sm text-gray-500">({cart.length} items)</span>}
                </div>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm p-12 text-center flex flex-col items-center">
                        <img
                            src="https://cdn.blinkit.com-prod/images/cart/empty-cart.png"
                            alt="Empty Cart"
                            className="w-48 h-48 opacity-50 mb-6"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/200?text=Empty+Cart";
                            }}
                        />
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Add items to your basket for superfast delivery!</p>
                        <Link to="/user" className="bg-[#0c831f] hover:bg-[#0b751c] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 divide-y divide-gray-100">
                                <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                                    <h3 className="font-semibold text-gray-700">Items in your cart</h3>
                                    <button onClick={clearCart} className="text-xs text-red-500 hover:underline font-medium">Clear All</button>
                                </div>
                                {cart.map(item => (
                                    <div key={item.id} className="p-4 sm:p-6 flex items-start sm:items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-contain rounded-md border border-gray-100"
                                        />

                                        <div className="ml-6 flex-1">
                                            <h3 className="text-base font-medium text-gray-800 mb-1">{item.name}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{item.weight}</p>
                                            <div className="flex items-center">
                                                <span className="font-bold text-gray-900 mr-4">{formatPrice(item.price)}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end space-y-3">
                                            <div className="flex items-center bg-[#0c831f] text-white rounded-lg overflow-hidden h-9 shadow-sm">
                                                <button
                                                    onClick={() => decrementQuantity(item.id)}
                                                    className="w-8 h-full hover:bg-[#0b751c] flex items-center justify-center transition-colors"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="w-8 text-sm font-bold text-center flex items-center justify-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => incrementQuantity(item.id)}
                                                    className="w-8 h-full hover:bg-[#0b751c] flex items-center justify-center transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-xs text-gray-400 hover:text-red-500 flex items-center"
                                            >
                                                <Trash2 size={12} className="mr-1" /> Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bill Details */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-24">
                                <h3 className="font-bold text-lg text-gray-800 mb-6">Bill Details</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <span>Item Total</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <span>Delivery Charge</span>
                                        <span>{formatPrice(deliveryCharge)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <span>Handling Charge</span>
                                        <span>₹2</span>
                                    </div>
                                </div>

                                <div className="border-t border-dashed border-gray-300 pt-4 mb-6">
                                    <div className="flex justify-between items-center font-bold text-lg text-gray-900">
                                        <span>Grand Total</span>
                                        <span>{formatPrice(grandTotal + 2)}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-[#0c831f] hover:bg-[#0b751c] text-white py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                                    Proceed to Pay
                                </button>

                                <div className="mt-4 bg-green-50 rounded-lg p-3 text-center">
                                    <p className="text-xs text-[#0c831f] font-medium">Safe & Secure Payments with 100% Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Cart;
