import React from "react";
import Cookie from "./Cookie";
import { Link } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/solid";

const CookieList = ({ cookieList }) => {
    return (
        <div className="min-h-screen flex items-center bg-purple-500">
            <div className="relative flex-1 max-w-screen-md mx-auto p-10">
                <h2 className="text-3xl font-bold">My Fortunes</h2>
                <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:mt-8">
                    {cookieList.map((cookie, index) => {
                        return <Cookie key={index} cookie={cookie} index={index} />;
                    })}
                </ul>

                <div class="absolute bottom-6 right-20 ">
                    <Link to="/add">
                        <PlusCircleIcon className="w-20 h-20 inline text-black hover:opacity-75" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CookieList;
