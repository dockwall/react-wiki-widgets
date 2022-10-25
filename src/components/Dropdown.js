import React from "react";

const Dropdown = (props) => {
    const renderedOptions = props.options.map(({ label, value }) => {
        return (
            <div key={value} className="item">
                {label}
            </div>
        )
    })


    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{props.labelText}</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon" />
                    <div className="text">{props.innerText}</div>
                    <div className="menu visible transition">{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown
