import React from "react";
import { footerBottomItem } from "../../constants";

const FooterBottom = () => {
    return (
        <div className="w-full bg-footerBottom py-20">
            <div className="max-w-5xl mx-auto">
                <div className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-3 place-items-center text-gray-400">
                    {footerBottomItem.map((item) => (
                        <div key={item._id}>
                            <h3 className="font-semibold text-white">{item.title}</h3>
                            <p className="footerLink w-36">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
