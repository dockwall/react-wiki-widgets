import React from "react";

const Link = ({ path, children }) => {
    const onLinkClick = (e) => {
        e.preventDefault();
    }

    return <a
        href={path}
        className="item"
        onClick={onLinkClick}
    >{children}</a>
};

export default Link;
