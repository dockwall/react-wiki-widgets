import React from "react";

const Link = ({ path, children }) => {
    // This is helper click handler fn
    const onLinkClick = (e) => {
        // If link was clicked when Cmd/Ctrl key is holding, do nothing
        // Do nothing = default behavior - new browser tab with new 'path'
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        // Else, firstly prevent page refreshing
        // Then update current path, create history event and get it in window
        // This event is handling in Route component
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
