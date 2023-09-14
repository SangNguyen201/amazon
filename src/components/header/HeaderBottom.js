import React, { useEffect, useRef, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SideNavContent from "./SideNavContent";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const HeaderBottom = () => {
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false);
    const userInfor = useSelector((state) => state.amazon.userInfor);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSidebar(false);
            }
        });
    }, []);
    return (
        <div className="w-full px-4 h-[36px] bg-amazon_light text-white">
            {/* list item start */}
            <ul className="flex items-center gap-2 text-sm tracking-wide pt-2">
                <li onClick={() => setSidebar(true)} className="headerHover flex items-center gap-1">
                    <MenuOutlinedIcon />
                    All
                </li>
                <li className="headerHover hidden md:inline-flex">Today's Deals</li>
                <li className="headerHover hidden md:inline-flex">Customer Service</li>
                <li className="headerHover hidden md:inline-flex">Gift Cards</li>
                <li className="headerHover hidden md:inline-flex">Registry</li>
                <li className="headerHover hidden md:inline-flex">Sell</li>
            </ul>
            {/* list item end */}
            {/* sideNav start  */}
            {sidebar && (
                <div className="w-full z-50 h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
                    <div className="w-full h-full relative">
                        <motion.div
                            ref={ref}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-[100%] md:w-[350px] h-full bg-white border border-black"
                        >
                            <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                                {userInfor ? <img src={userInfor.photoURL} alt="avatar" /> : <PermIdentityOutlinedIcon />}
                                <PermIdentityOutlinedIcon />
                                {userInfor ? <h3 className="text-lg">Hello, {userInfor.userName}</h3> : <h3 className="text-lg">Hello, Sign in</h3>}
                            </div>
                            <SideNavContent title="Digital Content & Service" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore" />
                            <SideNavContent title="Shop By Department" one="Electronics" two="Computers" three="Smart Home" />
                            <SideNavContent title="Proprams & Features" one="Gift Cards" two="Amazon Live" three="International Shopping" />
                            <SideNavContent title="Help & Settings" one="Your Account" two="Customer Service" three="Contact Us !" />
                            <span
                                className="absolute left-[88.5%] top-[1.5px] md:left-[309px]  text-black w-10 h-10 flex items-center justify-center border bg-gray-300 hover:bg-red-500 hover:text-white duration-200 cursor-pointer"
                                onClick={() => setSidebar(false)}
                            >
                                <CloseOutlinedIcon />
                            </span>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* sideNav end  */}
        </div>
    );
};

export default HeaderBottom;
