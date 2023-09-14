import React from "react";
import FooterTop from "./FooterTop.js";
import FooterMiddle from "./FooterMiddle.js";
import FooterBottom from "./FooterBottom.js";
const Footer = () => {
    return (
        <div className="w-full">
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </div>
    );
};

export default Footer;
