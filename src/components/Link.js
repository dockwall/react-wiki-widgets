import React from "react";

const Link = ({ path, children }) => {
    const onLinkClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', path);
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent);
    }

    return <a
        href={path}
        className="item"
        onClick={onLinkClick}
    >{children}</a>
};

export default Link;
