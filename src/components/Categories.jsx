// import React from 'react'

import { useEffect } from "react";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineDoneAll } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { PiSpeakerSimpleHigh } from "react-icons/pi";
import { CiBluetooth } from "react-icons/ci";
import { MdOutlineCable } from "react-icons/md";
import { MdOutlineCases } from "react-icons/md";
import { IoHeadsetOutline } from "react-icons/io5";
import { BiSolidJoystick } from "react-icons/bi";

const Categories = () => {

    useEffect(() => {
        $(".category-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            navText: false,
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 8
                }
            }
        });

        return () => {
            $(".category-carousel").trigger('destroy.owl.carousel');
        };
    }, []);


    return (
        <>
            <div className="bg-lightyellow border-t border-[#e0be00]">
                <div className="owl-carousel category-carousel container mx-auto py-6 text-center">
                    {[
                        { icon: <FaLaptop className="text-4xl" />, label: "Accessories" },
                        { icon: <MdOutlineDoneAll className="text-4xl" />, label: "All in One" },
                        { icon: <CiCamera className="text-4xl" />, label: "Cameras" },
                        { icon: <PiSpeakerSimpleHigh className="text-4xl" />, label: "Speakers" },
                        { icon: <CiBluetooth className="text-4xl" />, label: "Bluetooth" },
                        { icon: <MdOutlineCable className="text-4xl" />, label: "Chargers" },
                        { icon: <MdOutlineCases className="text-4xl" />, label: "Computer Cases" },
                        { icon: <IoHeadsetOutline className="text-4xl" />, label: "Headset" },
                        { icon: <BiSolidJoystick className="text-4xl" />, label: "Joystick" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center text-center gap-2"
                        >
                            <a
                                href="#"
                                className="flex flex-col items-center hover:text-red-900 transition duration-300"
                            >
                                {item.icon}
                                <p className="text-sm">{item.label}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Categories
