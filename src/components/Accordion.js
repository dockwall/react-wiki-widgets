import React, { useState } from "react";

// !IN FUTURE
// This is a component for render Accordion list with general information about this App

const Accordion = (props) => {
    // This state represents active element of Accordion list
    const [activeIndex, setActiveIndex] = useState(null);

    // This click handler set an active element in state
    const onTitleClick = (index) => {
        setActiveIndex(index)
    };


    // Create (from mock object by props) array of DOM fragments with title, text and arrow icon
    // If index of Fragment isn't active - Semantic UI style disabled
    const renderedItems = props.items.map(({ title, content }, index) => {
        const activeStatus = (index === activeIndex) ? 'active' : '';

        return (
            <React.Fragment key={title}>
                <div
                    className={`title ${activeStatus}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {title}
                </div>
                <div className={`content ${activeStatus}`}>
                    <p>{content}</p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>)
}

export default Accordion
