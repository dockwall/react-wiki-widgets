import React, { useState } from "react";

const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    };

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
