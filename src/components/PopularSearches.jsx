// import React from 'react'

const PopularSearches = () => {
    return (
        <>
            <div className=" pb-0 md:pb-7">
                <div className="container mx-auto px-3 lg:px-0">
                    <h2 className="text-2xl md:text-4xl font-extralight leading-snug border-b-4 border-darkyellow inline-block pb-3 mb-4 md:mb-8">Popular Searches</h2>
                    <div className="">
                        <ul className="flex flex-wrap gap-x-2 gap-y-3 md:gap-5">
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">Accessories</a></li>
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">Audio Speakers</a></li>
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">All in One</a></li>
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">Audio Speakers</a></li>
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">Bluetooth Speakers</a></li>
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">Cameras</a></li>
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">Photography</a></li>
                            <li className="w-full sm:w-auto my-2"><a className="px-8 py-3 bg-gray-300 rounded-md whitespace-nowrap text-lg text-gray-800 font-medium" href="#">Chargers & cables</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularSearches
