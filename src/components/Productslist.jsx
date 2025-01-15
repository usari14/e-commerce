// import React from 'react'

import { useEffect } from "react";
// import {products, laptops} from "../dataset/Dataset"

const Productslist = ({ heading, products, ptop }) => {
    console.log('ptop', ptop)

    useEffect(() => {
        $(".product-carousel").owlCarousel({
            loop: true,
            margin: -20,
            nav: true,
            dots: true,
            navText: false,
            // autoplay: true,
            // autoplaySpeed: 3000,
            // autoplayHoverPause: true,
            // autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        });

        return () => {
            $(".product-carousel").trigger('destroy.owl.carousel');
        };
    }, []);

    return (
        <>
            <div className="">
                <div className={`container mx-auto border-b pt-${ptop} border-gray-400 px-3 lg:px-0`}>
                    <h2 className="text-2xl md:text-4xl font-extralight leading-snug border-b-4 border-darkyellow inline-block pb-3">{heading}</h2>
                </div>
                <div className="owl-carousel product-carousel container mx-auto pt-6">
                    {products.map((item, index) => (
                        <div key={index} className="p-4">
                            {/* Clickable Card */}
                            <a
                                href="#"
                                className=" group relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out flex flex-col min-h-[350px] md:min-h-[350px]"
                            >
                                {/* Wishlist Heart */}
                                <button
                                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out z-10"
                                    aria-label="Add to Wishlist"
                                //   onClick={(e) => {
                                //     e.preventDefault(); // Prevent navigation if heart is clicked
                                //     handleWishlist(item); // Call your wishlist function
                                //   }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </button>
                                {/* Product Image */}
                                <div className="aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    />
                                </div>
                                {/* Product Details */}
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                                    <h3 className="text-lg font-semibold text-gray-800 hover:underline leading-tight">{item.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm md:text-lg text-gray-400 line-through">
                                            ${item.originalPrice}
                                        </span>
                                        <span className="text-sm md:text-lg font-bold text-red-500">
                                            ${item.discountedPrice}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Productslist
