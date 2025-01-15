// import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

const Topbar = () => {
    return (
        <>
            <div className="topbar border-b border-[#ddd] shadow-md">
                <div className="container mx-auto py-2 px-3 xl:px-0">
                    <div className="flex justify-center md:justify-between">
                        <p className="text-lightblack text-base hidden md:block">Welcome to Worldwide Electronics Store</p>
                        <div>
                            <ul className="flex gap-0 md:gap-4 text-lightblack">
                                <li className="border-none xl:border-r border-gray-500 pr-5 md:pr-2 lg:pr-5 leading-none">
                                    <a href="" className="flex gap-2"><CiLocationOn className="text-xl text-black" />
                                        <span className="hidden md:block">Store Location</span></a>
                                </li>
                                <li className="border-none xl:border-r border-gray-500 pr-5 md:pr-2 lg:pr-5 leading-none">
                                    <a href="" className="flex gap-2"><CiDeliveryTruck className="text-xl text-black" /><span className="hidden md:block">Track Your Order</span></a>
                                </li>
                                <li className="border-none xl:border-r border-gray-500 pr-5 md:pr-2 lg:pr-5 leading-none">
                                    <a href="" className="flex gap-2"><BsHandbag className="text-xl text-black" /><span className="hidden md:block">Shop</span></a>
                                </li>
                                <li className="leading-none">
                                    <a href="" className="flex gap-2"><CiUser className="text-xl text-black" /><span className="hidden md:block">My Account</span></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
