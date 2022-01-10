import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import data from "./fortune-data.json";
import CookieList from "./CookieList";
import CookieForm from "./CookieForm";
import CookiePage from "./CookiePage";
import Wrapper from "./Wrapper";

function App() {
    const [cookieList, setCookieList] = useState(data.fortunes);

    const addTask = userInput => {
        let copy = [...cookieList];
        copy = [
            ...copy,
            {
                text: userInput,
                date: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString()
            }
        ];
        setCookieList(copy);
    };

    return (
        <Wrapper>
            <div className="flex flex-row">
                <Switch>
                    <Route path="/add" render={props => <CookieForm addTask={addTask} />} />
                    <Route path="/:cookieId" render={props => <CookiePage cookieList={cookieList} {...props} />} />
                    <Route path="/" exact render={props => <CookieList cookieList={cookieList} />} />
                </Switch>
            </div>
        </Wrapper>
    );
}

export default App;
