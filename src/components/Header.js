import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></div>
        <div><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></div>
        <div><NavLink to="/help" activeClassName="is-active">Get help</NavLink></div>
    </header>
);

export default Header