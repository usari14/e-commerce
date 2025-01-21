// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";
// import { useState } from "react";
import Productslist from "../components/Productslist";
import { products } from "../dataset/Dataset";


const ProductDetail = () => {
    // const [quantity, setQuantity] = useState(1);

    const location = useLocation();
    const { addToCart, increment, decrement,quantity } = useCart()
    const { product } = location.state || {};

    if (!product) {
        return <p className="container mx-auto">Product not found.</p>;
    }

    // const Quantity = cartItems.map((item)=> {
    //     item.id === product.id ? item.quantity : null
    //     return item.quantity
    // })

    // const increment = () => {
    //     setQuantity((prevQuantity) => prevQuantity + 1);
    // };

    // const decrement = () => {
    //     if (quantity > 1) {
    //         setQuantity((prevQuantity) => prevQuantity - 1);
    //     }
    // };

    return (
        <div className="pb-20">
            <div className="bg-lightyellow">
                <div className="container mx-auto py-5">
                    <h2 className="text-4xl font-medium">Product Details</h2>
                </div>
            </div>
            <div className="container mx-auto pt-20 pv-10" >
                <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-8">
                    <div className="group relative overflow-hidden">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-lg text-gray-500 mt-2">{product.subtitle}</p>
                        <div className="flex items-center mt-4 mb-4">
                            <span className="text-2xl font-bold text-red-500">
                                ${product.discountedPrice}
                            </span>
                            <span className="text-xl text-gray-400 line-through ml-4">
                                ${product.originalPrice}
                            </span>
                        </div>
                        <div>
                            <p className="text-lg">Availability {product.stock > 0 ? "In Stock" : ""}<span className="text-green-700 text-lg font-semibold ml-2">{product.stock}</span></p>
                        </div>
                        <p className="text-gray-700 mt-6">
                            {product.description}
                        </p>
                        <div className="flex items-center gap-0 mt-4">
                            <button
                                onClick={()=>decrement(product.id)}
                                className="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg"
                            >
                                -
                            </button>
                            <span className="text-lg px-8 py-3 border-2 border-gray-600">{quantity}</span>
                            <button
                                onClick={()=>increment(product.id)}
                                className="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg"
                            >
                                +
                            </button>

                        </div>
                        <button onClick={() => addToCart(product,quantity)} className="mb-5 bg-lightyellow text-black px-8 py-3 rounded-lg mt-4">Add To cart</button>
                        <p className="text-base text-[#555555]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod inventore doloremque reprehenderit numquam! Quae temporibus ex tempora quia consequuntur iure in ratione laudantium maxime dolore qui reprehenderit, voluptatum quod debitis veritatis ipsam, facere consectetur odio, harum perspiciatis accusantium eveniet corporis. Illum incidunt atque modi minus dignissimos architecto alias ex tenetur, quisquam, aut fugiat doloremque nisi distinctio sint officiis consequuntur sequi praesentium? Cumque alias ullam quidem vero ratione sequi a fugiat neque, sapiente recusandae quibusdam beatae eos ea aut, nulla minus eum! Nemo maxime praesentium eum itaque voluptas nobis natus at dolores cupiditate possimus iure dignissimos, quidem consectetur id consequuntur.</p>
                    </div>
                </div>
            </div>
            <Productslist heading="Related Products" products={products} />
        </div>
    )
}

export default ProductDetail
