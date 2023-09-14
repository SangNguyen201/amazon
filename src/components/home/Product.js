import React from "react";
import { useLoaderData } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazoneSlice";
const Product = () => {
    const dispatch = useDispatch();
    const data = useLoaderData();
    const productData = data.data;
    return (
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-4">
            {productData.map((item) => (
                <div
                    key={item.id}
                    className="bg-white h-auto border-[1px] border-gray-200 py-2 z-30 cursor-pointer
                    hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
                >
                    <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-400">{item.category}</span>
                    <div className="w-full h-auto flex items-center justify-center relative group">
                        <img className="w-52 h-64 object-contain " src={item.image} alt="productImg" />
                        <ul className="absolute w-full h-36 bg-gray-100 bottom-[-165px] group-hover:bottom-0 duration-300 flex flex-col items-end justify-center gap-2 px-2 border-100 border-r">
                            <li className="productLi">
                                Compare{" "}
                                <span>
                                    <CompareArrowsIcon />
                                </span>
                            </li>
                            <li className="productLi">
                                Add to cart{" "}
                                <span>
                                    <ShoppingCartIcon />
                                </span>
                            </li>
                            <li className="productLi">
                                View details{" "}
                                <span>
                                    <ArrowCircleRightIcon />
                                </span>
                            </li>
                            <li className="productLi">
                                Add to wish list{" "}
                                <span>
                                    <FavoriteIcon />
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white z-10">
                        <div className="flex items-center justify-between ">
                            <h2 className="font-semibold text-lg text-amazon_blue">{item.title.substring(0, 15)}</h2>
                            <p>
                                {item.price}
                                <span className="ml-1">$</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-xs">{item.description.substring(0, 30)}...</p>
                            <div className="flex items-center justify-between mt-1">
                                <div className="flex items-center">
                                    <p>{item.rating.rate}</p>
                                    <span className="text-yellow-400 text-xs">
                                        <StarRateIcon />
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <p>Count</p>
                                    <p className="ml-1 text-amazon_blue font-semibold">{item.rating.count}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                dispatch(
                                    addToCart({
                                        id: item.id,
                                        title: item.title,
                                        desc: item.description,
                                        price: item.price,
                                        category: item.category,
                                        img: item.image,
                                        quantity: 1,
                                    })
                                );
                            }}
                            className="buttonCart"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
