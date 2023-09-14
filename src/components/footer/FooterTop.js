import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
    return (
        <div className="w-full bg-white py-6">
            <div className="w-full py-8">
                <div className="w-72 mx-auto text-center flex flex-col gap-1">
                    <p className="text-sm">See Personalized recommendations</p>
                    <Link to="/signin">
                        <button className="w-full bg-yellow-400 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">Sign In</button>
                    </Link>
                    <p>
                        New Customer ? <span className="text-blue-600 ml-1 cursor-pointer">Start Here.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
