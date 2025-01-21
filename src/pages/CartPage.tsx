import React from 'react';
import { useCart } from '../Context/CartContext';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, quantity, increment, decrement } = useCart();
    console.log('quantity', quantity);

    return (
        <>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500">
                <div className="container mx-auto py-6">
                    <h1 className="text-5xl font-semibold text-white text-center">Your Shopping Cart</h1>
                </div>
            </div>
            <div className="container mx-auto py-12 px-3 xl:px-0">
                <h2 className="text-4xl font-semibold text-gray-800 mb-8">Items in Your Cart</h2>
                <div className="hidden md:flex justify-between mb-4 text-gray-600 text-lg">
                    <div className="w-5/12">Product</div>
                    <div className="w-3/12 text-center">Quantity</div>
                    <div className="w-2/12 text-center">Total</div>
                </div>
                <hr className="border-t-2 border-gray-300 " />
                <div className="space-y-8">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex flex-wrap justify-between items-center py-6 border-b border-gray-200">
                            <div className="flex items-center w-full md:w-5/12 gap-4">
                                <div className="w-32 h-32 bg-white p-3 rounded-lg border shadow-md">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-gray-800">{item.title}</h3>
                                    <p className="text-lg text-gray-600">{item.subtitle}</p>
                                </div>
                            </div>

                            {/* <p className='bg-gray-500 text-white w-5 h-5 flex justify-center items-center pb-1 rounded-full'>+</p> */}

                            <div className="w-full md:w-3/12 flex justify-center items-center gap-4 mb-4 md:mb-0">
                                <button
                                    onClick={() => decrement(item.id)}
                                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700"
                                >
                                    -
                                </button>
                                <span className="w-16 h-10 bg-gray-100 text-center flex items-center justify-center text-lg font-medium">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() => increment(item.id)}
                                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => console.log("Remove item")}
                                    className="text-xl text-red-600 hover:text-red-800"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                            <div className="w-full md:w-2/12 text-center">
                                <p className="text-lg text-gray-800">Rs {item.discountedPrice} /-</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mb-12 mt-5">
                    <button className="px-8 py-3 bg-yellow-400 text-black rounded-lg text-lg hover:bg-yellow-500 transition duration-300">Update Cart</button>
                </div>
                <div className="flex justify-end">
                    <div className="w-full lg:w-2/5 bg-white border rounded-lg shadow-lg">
                        <div className="bg-gray-100 py-6 px-8 text-xl font-semibold text-gray-800 border-b">
                            Cart Total
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between mb-6">
                                <p className="text-lg text-gray-700">Subtotal</p>
                                <p className="text-lg text-gray-700">Rs: 100/-</p>
                            </div>
                            <hr className="border-t-2 border-gray-300 mb-6" />
                            <div className="flex justify-between mb-6">
                                <p className="text-lg text-gray-700">Shipping</p>
                                <p className="text-lg text-gray-700">Flat rate: Rs 300 shipping to Punjab.</p>
                            </div>
                            <div className="mb-6">
                                <p className="text-lg text-gray-700">Change Address:</p>
                                <select name="city" className="w-full p-3 border border-gray-300 rounded-md mb-3">
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Quetta">Quetta</option>
                                    <option value="Peshawar">Peshawar</option>
                                </select>
                                <input type="text" name="street" placeholder="City" className="w-full p-3 border border-gray-300 rounded-md mb-3" />
                                <input type="text" name="postal-code" placeholder="Postcode/zip" className="w-full p-3 border border-gray-300 rounded-md mb-4" />
                                <button className="w-full px-8 py-3 bg-yellow-400 text-black rounded-lg text-lg hover:bg-yellow-500 transition duration-300">Update</button>
                            </div>
                            <hr className="border-t-2 border-gray-300 mb-6" />
                            <div className="flex justify-between mb-6">
                                <p className="text-lg text-gray-700">Total</p>
                                <p className="text-lg text-gray-700">Rs: 400/-</p>
                            </div>
                            <div className="text-center">
                                <Link to='/checkout' className="px-12 py-3 bg-yellow-400 text-black rounded-lg text-lg hover:bg-yellow-500 transition duration-300">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
