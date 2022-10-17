import React from "react";

const Accordion = (props) => {
    const onTitleClick = (index) => {
        console.log(`Title ${index} was clicked!`)
    };

    const renderedItems = props.items.map(({ title, content }, index) => {
        return (
            <React.Fragment key={title}>
                <div
                    className="title active"
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {title}
                </div>
                <div className="content active">
                    <p>{content}</p>
                </div>
            </React.Fragment>
        )
    });

    return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion
