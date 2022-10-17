import React from "react";

const Accordion = (props) => {
    const renderedItems = props.items.map(({ title, content }) => {
        return (
            <div>
                <div>
                    {title}
                </div>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        )
    })
    return <h1>{renderedItems}</h1>;
}

export default Accordion