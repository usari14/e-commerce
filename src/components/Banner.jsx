// import React from 'react'

import { useEffect } from "react";
import banner1 from "../assets/banner1.png"

const Banner = () => {

    useEffect(() => {
        $(".banner-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        return () => {
            $(".banner-carousel").trigger('destroy.owl.carousel');
        };
    }, []);

    return (
        <div>
            <div className="relative owl-carousel banner-carousel bg-lightyellow">
                <div className="relative flex flex-col md:flex-row items-center justify-center pb-10 pt-4 md:pb-10 md:pt-6 lg:py-24 container mx-auto">
                    {/* Image in the center */}
                    <div className="relative z-10">
                        <img src={banner1} className="w-40 h-40 md:h-56 md:w-56 lg:w-64 lg:h-64 xl:w-full xl:h-full object-cover rounded-full" alt="Centered Image" />
                    </div>

                    {/* Text on the left */}
                    <div className="static md:absolute left-0 inset-y-0 flex items-center justify-center md:px-10 text-center md:text-left">
                        <div className=" hidden md:block">
                            <h2 className=" text-lg md:text-3xl lg:text-5xl xl:text-6xl font-normal md:font-extralight  md:uppercase leading-none text-black">
                                Limited<br className="hidden md:block" /> <span className="text-lg md:text-3xl lg:text-5xl xl:text-[70px]">Week Deal</span>
                            </h2>
                            <p className="text-lg leading-none text-black mt-1 md:mt-4">
                                Hurry Up before offer will end
                            </p>
                        </div>
                        <p className="text-lg font-medium md:hidden px-5 md:px-0">Limited Week Deal Hurry Up before offer will end, Book Your Order bu just one click BUY NOW</p>
                    </div>

                    {/* Text on the right */}
                    <div className="static md:absolute right-0 inset-y-0 flex items-center justify-center md:px-10 text-right">
                        <div>
                            <p className="text-xl text-left mt-2 lg:text-3xl text-blue-600 font-semibold leading-none mb-2 md:mb-8">
                                Best Ear Buds in 2025
                            </p>
                            <strong className="text-left block text-lg md:text-2xl mb-2 md:mb-8">$350,00</strong>
                            <div className="flex justify-start">
                                <button className="text-black hover:bg-black hover:text-white  text-lg px-16 py-3 border-2 border-black bg-transparent rounded-md">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center pb-10 pt-4 md:pb-10 md:pt-6 lg:py-24 container mx-auto">
                    {/* Image in the center */}
                    <div className="relative z-10">
                        <img src={banner1} className="w-40 h-40 md:h-56 md:w-56 lg:w-64 lg:h-64 xl:w-full xl:h-full object-cover rounded-full" alt="Centered Image" />
                    </div>

                    {/* Text on the left */}
                    <div className="static md:absolute left-0 inset-y-0 flex items-center justify-center md:px-10 text-center md:text-left">
                        <div className=" hidden md:block">
                            <h2 className=" text-lg md:text-3xl lg:text-5xl xl:text-6xl font-normal md:font-extralight  md:uppercase leading-none text-black">
                                Limited<br className="hidden md:block" /> <span className="text-lg md:text-3xl lg:text-5xl xl:text-[70px]">Week Deal</span>
                            </h2>
                            <p className="text-lg leading-none text-black mt-1 md:mt-4">
                                Hurry Up before offer will end
                            </p>
                        </div>
                        <p className="text-lg font-medium md:hidden px-5 md:px-0">Limited Week Deal Hurry Up before offer will end, Book Your Order bu just one click BUY NOW</p>
                    </div>

                    {/* Text on the right */}
                    <div className="static md:absolute right-0 inset-y-0 flex items-center justify-center md:px-10 text-right">
                        <div>
                            <p className="text-xl text-left mt-2 lg:text-3xl text-blue-600 font-semibold leading-none mb-2 md:mb-8">
                                Best Ear Buds in 2025
                            </p>
                            <strong className="text-left block text-lg md:text-2xl mb-2 md:mb-8">$350,00</strong>
                            <div className="flex justify-start">
                                <button className="text-black hover:bg-black hover:text-white  text-lg px-16 py-3 border-2 border-black bg-transparent rounded-md">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center pb-10 pt-4 md:pb-10 md:pt-6 lg:py-24 container mx-auto">
                    {/* Image in the center */}
                    <div className="relative z-10">
                        <img src={banner1} className="w-40 h-40 md:h-56 md:w-56 lg:w-64 lg:h-64 xl:w-full xl:h-full object-cover rounded-full" alt="Centered Image" />
                    </div>

                    {/* Text on the left */}
                    <div className="static md:absolute left-0 inset-y-0 flex items-center justify-center md:px-10 text-center md:text-left">
                        <div className=" hidden md:block">
                            <h2 className=" text-lg md:text-3xl lg:text-5xl xl:text-6xl font-normal md:font-extralight  md:uppercase leading-none text-black">
                                Limited<br className="hidden md:block" /> <span className="text-lg md:text-3xl lg:text-5xl xl:text-[70px]">Week Deal</span>
                            </h2>
                            <p className="text-lg leading-none text-black mt-1 md:mt-4">
                                Hurry Up before offer will end
                            </p>
                        </div>
                        <p className="text-lg font-medium md:hidden px-5 md:px-0">Limited Week Deal Hurry Up before offer will end, Book Your Order bu just one click BUY NOW</p>
                    </div>

                    {/* Text on the right */}
                    <div className="static md:absolute right-0 inset-y-0 flex items-center justify-center md:px-10 text-right">
                        <div>
                            <p className="text-xl text-left mt-2 lg:text-3xl text-blue-600 font-semibold leading-none mb-2 md:mb-8">
                                Best Ear Buds in 2025
                            </p>
                            <strong className="text-left block text-lg md:text-2xl mb-2 md:mb-8">$350,00</strong>
                            <div className="flex justify-start">
                                <button className="text-black hover:bg-black hover:text-white  text-lg px-16 py-3 border-2 border-black bg-transparent rounded-md">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center pb-10 pt-4 md:pb-10 md:pt-6 lg:py-24 container mx-auto">
                    {/* Image in the center */}
                    <div className="relative z-10">
                        <img src={banner1} className="w-40 h-40 md:h-56 md:w-56 lg:w-64 lg:h-64 xl:w-full xl:h-full object-cover rounded-full" alt="Centered Image" />
                    </div>


                    {/* Text on the left */}
                    <div className="static md:absolute left-0 inset-y-0 flex items-center justify-center md:px-10 text-center md:text-left">
                        <div className=" hidden md:block">
                            <h2 className=" text-lg md:text-3xl lg:text-5xl xl:text-6xl font-normal md:font-extralight  md:uppercase leading-none text-black">
                                Limited<br className="hidden md:block" /> <span className="text-lg md:text-3xl lg:text-5xl xl:text-[70px]">Week Deal</span>
                            </h2>
                            <p className="text-lg leading-none text-black mt-1 md:mt-4">
                                Hurry Up before offer will end
                            </p>
                        </div>
                        <p className="text-lg font-medium md:hidden px-5 md:px-0">Limited Week Deal Hurry Up before offer will end, Book Your Order bu just one click BUY NOW</p>
                    </div>

                    {/* Text on the right */}
                    <div className="static md:absolute right-0 inset-y-0 flex items-center justify-center md:px-10 text-right">
                        <div>
                            <p className="text-xl text-left mt-2 lg:text-3xl text-blue-600 font-semibold leading-none mb-2 md:mb-8">
                                Best Ear Buds in 2025
                            </p>
                            <strong className="text-left block text-lg md:text-2xl mb-2 md:mb-8">$350,00</strong>
                            <div className="flex justify-start">
                                <button className="text-black hover:bg-black hover:text-white  text-lg px-16 py-3 border-2 border-black bg-transparent rounded-md">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner
