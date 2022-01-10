import { useHistory } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import moment from "moment";

const CookiePage = ({ match, cookieList }) => {
    const cookieId = match.params.cookieId;
    const history = useHistory();

    const getCookieById = id => {
        return cookieList.find(cookie => cookieList.indexOf(cookie).toString() === id);
    };

    const cookie = getCookieById(cookieId);

    const handleSave = () => {
        history.push("/");
    };

    let timeFormatted = new Date(cookie.date);

    return (
        <div className="min-h-full flex items-center justify-center py-10 bg-honeycomb">
            <div className="relative flex-1 p-4 pt-10 pb-20 ">
                <h1>
                    {cookie ? (
                        <>
                            <div className="text-xl font-bold text-white p-10 mb-20 shrink w-64 h-14">
                                {cookie.text}
                            </div>
                            <div className="p-4 flex items-center justify-center pt-12">
                                <div className="absolute bottom-0 shadow-sm text-sm font-sm rounded-xl text-white bg-opacity-25 bg-white p-2">
                                    {moment(timeFormatted).format("LL")}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-xl font-bold text-black p-10">
                            Cookie with ID:{cookieId} was not found :( <div>Better luck next time!</div>
                        </div>
                    )}
                </h1>
                <XCircleIcon
                    onClick={() => handleSave()}
                    className="absolute top-0 right-5 w-10 h-10 inline text-white m-4 pb-1 hover:opacity-75"
                />
            </div>
        </div>
    );
};

export default CookiePage;
