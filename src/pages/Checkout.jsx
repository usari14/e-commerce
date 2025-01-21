import React from 'react';

const Checkout = () => {
    return (
        <>
            {/* Header Section */}
            <div className="bg-lightyellow py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-medium text-black">Checkout</h1>
                </div>
            </div>
            <div className="container mx-auto py-14 px-4">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8">
                    <p className="text-lg">
                        Returning Customer?{' '}
                        <a href="#" className="text-blue-500 underline">
                            Click here to login.
                        </a>
                    </p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-8/12 px-4 mb-8 lg:mb-0">
                        <div className="bg-white shadow-2xl rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6 border-b pb-4">
                                Billing Details
                            </h2>
                            <form className="space-y-6">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block text-sm font-medium mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block text-sm font-medium mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Company Name (Optional)</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Street Address</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring focus:ring-blue-300"
                                        placeholder="House number and street name"
                                    />
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                        placeholder="Apartment, suite, etc. (optional)"
                                    />
                                </div>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block text-sm font-medium mb-2">City</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block text-sm font-medium mb-2">State</label>
                                        <select className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300">
                                            <option>Punjab</option>
                                            <option>Sindh</option>
                                            <option>KPK</option>
                                            <option>Balochistan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block text-sm font-medium mb-2">Phone</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="bg-white shadow-2xl rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6 border-b pb-4">
                                Cart Total
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>Rs 3000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>Rs 300</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>Rs 3300</span>
                                </div>
                            </div>
                            <button className="w-full mt-6 bg-lightyellow text-black py-2 rounded-lg hover:bg-blue-600">
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
