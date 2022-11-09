import { useState, useEffect } from "react";

// Route component returns child Component if current path is right for that, or null
const Route = ({ path, children }) => {
    // This state is only needed to rerender Route
    // When Route rerenders, useEffect runs
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // This helper handle fn updating state by current path
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        // Creating listener of 'popstate' event (init when link was clicked)
        window.addEventListener('popstate', onLocationChange);

        // Cleanup function
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    return (currentPath === path) ? children : null;
};

export default Route;