import React from "react";
const FooterMiddleList = ({ title, listItem }) => {
    return (
        <div className="w-full">
            <h3 className="font-semibold text-white my-3">{title}</h3>
            <ul className="flex flex-col gap-2">{listItem.map((item) => item.listData.map((data) => <li className="footerLink">{data}</li>))}</ul>
        </div>
    );
};

export default FooterMiddleList;
