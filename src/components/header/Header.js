import React, { useEffect, useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { logo } from "../../assets/index.js";
import LogoutIcon from "@mui/icons-material/Logout";
import { allItem } from "../../constants/index.js";
import HeaderBottom from "./HeaderBottom.js";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignOut } from "../../redux/amazoneSlice.js";
const Header = () => {
    const auth = getAuth();
    const [showAll, setShowAll] = useState(false);
    const products = useSelector((state) => state.amazon.products);
    const userInfor = useSelector((state) => state.amazon.userInfor);
    const dispatch = useDispatch();
    const ref = useRef();
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                showAll && setShowAll(false);
            }
        });
    }, [ref, showAll]);
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch(userSignOut());
                console.log("Sign out success");
            })
            .catch((error) => {
                console.log("error: ", error);
                // An error happened.
            });
    };
    return (
        <div className="w-full sticky top-0 z-50">
            <div className="w-full mx-auto bg-amazon_blue text-white px-4 py-3 flex items-center gap-3">
                {/* Image Start  */}
                <Link to="/">
                    <div className="headerHover">
                        <img className="w-24 mt-2" src={logo} alt="logo" />
                    </div>
                </Link>
                {/* Image End  */}
                {/* Deliver Start  */}
                <div className="headerHover hidden mdl:inline-flex">
                    <LocationOnIcon />
                    <p className="text-sm text-lightText font-light w-20">
                        Deliver to <span className="text-sm font-semibold -mt-1 text-whiteText">Billy</span>
                    </p>
                </div>
                {/* Deliver End  */}
                {/* Search  Start  */}
                <div className="h-10 rounded-md hidden mdl:flex flex-grow relative">
                    <span onClick={() => setShowAll(!showAll)} className="headerDropdown">
                        All{" "}
                        <span>
                            <ArrowDropDownIcon />
                        </span>
                    </span>
                    {showAll && (
                        <div>
                            <ul className="headerListMenu">
                                {allItem.map((item) => (
                                    <li key={item._id} className="text-sm tracking-wide border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <input className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" type="text" placeholder="" />
                    <span className="headerSearch">
                        <SearchIcon />
                    </span>
                </div>
                {/* Search End  */}
                {/* Signin Start  */}
                <Link to="/signin">
                    <div className="flex flex-col items-start justify-center headerHover">
                        {userInfor ? <p>Hello ! {userInfor.userName}</p> : <p>Hello ! Sign in</p>}
                        <p className="hidden mdl:inline-flex">
                            Accounts & Lists{" "}
                            <span>
                                <ArrowDropDownIcon />
                            </span>
                        </p>
                    </div>
                </Link>
                {/* Signin End  */}
                {/* Orders Start  */}
                <div className="hidden mdl:flex flex-col items-start justify-center headerHover">
                    <p className="text-sm text-lightText">Returns</p>
                    <p>& Orders</p>
                </div>
                {/* Orders Start  */}
                {/* Cart Start  */}
                <Link to="/cart">
                    <div className="flex items-start justify-center headerHover relative">
                        <ShoppingCartOutlinedIcon />
                        <p className="mt-4 text-sm font-semibold">
                            Cart{" "}
                            <span className="absolute text-sm -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                                {products.length > 0 ? products.length : 0}
                            </span>
                        </p>
                    </div>
                </Link>
                {userInfor && (
                    <div onClick={handleLogout} className="flex flex-col justify-center items-center headerHover">
                        <LogoutIcon />
                        <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">Log Out</p>
                    </div>
                )}
                {/* Cart End  */}
            </div>
            <HeaderBottom />
        </div>
    );
};

export default Header;
