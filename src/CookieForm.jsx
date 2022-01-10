import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";

const CookieForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");
    const history = useHistory();

    const handleChange = e => {
        setUserInput(e.currentTarget.value);
    };

    const handleSave = () => {
        history.push("/");
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
        handleSave();
    };

    return (
        <div className="relative flex-1 p-4 pt-8">
            <form className="p-6 pr-20" onSubmit={handleSubmit}>
                <input
                    value={userInput}
                    type="text"
                    onChange={handleChange}
                    className="text-xl font-bold p-5 pr-10 rounded-none border-transparent focus:outline-none"
                    placeholder="Start writing..."
                />
                <div className="px-4 py-3  text-right sm:px-6">
                    <button className="absolute bottom-6 right-15 py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-xl text-white bg-black hover:bg-indigo-700 hover:opacity-75">
                        Done
                    </button>
                </div>
            </form>
            <XCircleIcon
                onClick={() => handleSave()}
                className="absolute top-0 right-3 w-10 h-10 inline text-black m-4 pb-1 hover:opacity-75"
            />
        </div>
    );
};

export default CookieForm;
