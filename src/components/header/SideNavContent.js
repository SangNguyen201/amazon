import React from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const SideNavContent = ({ title, one, two, three }) => {
    return (
        <div>
            <div className="px-6 mt-1 border-b-[1px] border-b-gray-300 ">
                <h3 className="text-lg font-semibold">{title}</h3>
                <ul>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 cursor-pointer">
                        {one}
                        <span>
                            <KeyboardArrowRightOutlinedIcon />
                        </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 cursor-pointer">
                        {two}
                        <span>
                            <KeyboardArrowRightOutlinedIcon />
                        </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 cursor-pointer">
                        {three}
                        <span>
                            <KeyboardArrowRightOutlinedIcon />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNavContent;
