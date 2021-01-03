import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {TLPage} from "./pages/TLPage";
import {MyPage} from "./pages/MyPage";
import {MainPage} from "./pages/MainPage";

function App() {
    return (
        <div className="App">
            <ul>
                <li><NavLink exact to="/">MainPage</NavLink></li>
                <li><NavLink to="/timeline">TimeLine</NavLink></li>
                <li><NavLink to="/mypage">MyPage</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/"><MainPage /></Route>
                <Route path="/timeline"><TLPage /></Route>
                <Route path="/mypage"><MyPage /></Route>
            </Switch>
        </div>
    );
}
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
