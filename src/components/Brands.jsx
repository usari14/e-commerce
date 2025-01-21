// import React from 'react'

import { useEffect } from "react";
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"

const Brands = () => {

    useEffect(() => {
        $(".brand-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
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
                    items: 4
                }
            }
        });

        return () => {
            $(".brand-carousel").trigger('destroy.owl.carousel');
        };
    }, []);

    return (
        <>
            <div className="mt-10 mb-10">
                <div className={`container mx-auto border-b border-gray-400 px-3 lg:px-0`}>
                    <h2 className="text-2xl md:text-4xl font-extralight leading-snug border-b-4 border-darkyellow inline-block pb-3">Brands</h2>
                </div>
                <div className="owl-carousel brand-carousel container  mx-auto py-6 md:py-10 border-b-4 border-gray-300">
                    <div>
                        <img className="w-32 h-10 md:h-20 object-cover px-6" src={brand1} alt="Brand 1" />
                    </div>
                    <div>
                        <img className="w-32 h-10 md:h-20 object-cover px-6" src={brand2} alt="Brand 2" />
                    </div>
                    <div>
                        <img className="w-32 h-10 md:h-20 object-cover px-6" src={brand3} alt="Brand 3" />
                    </div>
                    <div>
                        <img className="w-32 h-10 md:h-20 object-cover px-6" src={brand4} alt="Brand 4" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Brands
