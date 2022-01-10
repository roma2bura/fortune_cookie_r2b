import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Cookie = ({ cookie, index }) => {
    let timeFormatted = new Date(cookie.date);
    return (
        <li className="relative bg-honeycomb shrink h-60 rounded-lg shadow-lg p-6 hover:shadow-xl hover:opacity-75">
            <div id={index} key={index} name="cookie" className="h-24">
                <Link key={index} to={`/${index}`}>
                    <div className="text-white">
                        <p>{cookie.text}</p>
                        <div className="absolute bottom-5 flex items-center justify-center shadow-sm text-sm font-sm rounded-xl text-white bg-opacity-25 bg-white p-2">
                            {moment(timeFormatted).format("LL")}
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default Cookie;
