import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link path="/">Accordion</Link>
            <Link path="/search">Search</Link>
            <Link path="/dropdown">Dropdown</Link>
            <Link path="/translate">Translate</Link>
        </div>
    )
};

export default Header;