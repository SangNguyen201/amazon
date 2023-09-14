import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity, resetCart } from "../redux/amazoneSlice";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";
const Cart = () => {
    const products = useSelector((state) => state.amazon.products);
    const [totalPrice, setTotalPrice] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        products.map((item) => {
            total += item.price * item.quantity;
            return setTotalPrice(total.toFixed(2));
        });
    }, [products]);
    return (
        <div className="w-full bg-gray-100 p-4">
            {products.length > 0 ? (
                <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
                    <div className="w-full h-full bg-white px-4 col-span-4">
                        <div className="flex items-center justify-between border-b-[1px] border-b-gray-300 py-3">
                            <h2 className="text-xl font-medium">Shopping Cart</h2>
                            <h4 className="text-md font-normal">Subtitle</h4>
                        </div>
                        {/* Product start here */}
                        {products.map((item) => (
                            <div key={item.id} className="grid grid-cols-5 items-center border-b-[1px] border-b-gray-300 p-3 gap-6">
                                <div className="col-span-1">
                                    <img className="w-full object-contain" src={item.img} alt="productImg" />
                                </div>
                                <div className="col-span-3">
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-sm py-2">{item.desc.substring(0, 200)}</p>
                                    <p>
                                        Unit Price <span className="font-semibold text-lg">$ {item.price}</span>
                                    </p>
                                    <div className="flex gap-5 cursor-pointer text-lg bg-[#F0F2F2] w-56 p-1 drop-shadow-lg rounded-lg">
                                        <p>Quantity:</p>
                                        <p onClick={() => dispatch(decreaseQuantity(item.id))} className=" bg-gray-200 px-3 rounded-md hover:bg-gray-400 duration-300">
                                            -
                                        </p>
                                        <p>{item.quantity}</p>
                                        <p onClick={() => dispatch(increaseQuantity(item.id))} className=" bg-gray-200 px-[11px] rounded-md hover:bg-gray-400 duration-300">
                                            +
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            dispatch(deleteItem(item.id));
                                        }}
                                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-600 active:bg-red-800 duration-300"
                                    >
                                        Delete Item
                                    </button>
                                </div>
                                <div className="col-span-1 text-right font-semibold text-lg">$ {(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))}
                        {/* Product start end */}
                        <div className="py-2">
                            <button onClick={() => dispatch(resetCart())} className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-bold text-lg tracking-wide">
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4">
                        <div>
                            <p className="flex gap-2 items-start text-sm">
                                <span>
                                    <CheckCircleIcon className="bg-white text-green-400 rounded-full" />
                                </span>
                                Your Order qualifies for Free Shipping Choose this option at checkout . See details...
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold px-10 py-1 items-center justify-between">
                                Total : <span className="text-lg font-bold">$ {totalPrice}</span>
                            </p>
                        </div>
                        <button className="buttonCart">Proceed To Pay</button>
                    </div>
                </div>
            ) : (
                <div intial="" className="flex justify-center items-center gap-4 py-10">
                    <div>
                        <img className="w-80 rounded-lg mx-auto" src={emptyCart} alt="imgEmptyCart" />
                    </div>
                    <div className="w-96 p-10 bg-white flex flex-col justify-center items-center rounded-md shadow-lg">
                        <h1 className="text-xl font-bold">Your Cart Feels Lonely</h1>
                        <p className="text-sm text-center">Your shopping cart lives to serve . Give it purpose - fill it with book , electronics , vdeos , etc . And make it happy.</p>
                        <Link className="w-full" to="/">
                            <button className="buttonCart">Continue Shopping</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
