import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false)

    const activeDropdownStyles = {
        dropdown: 'visible active',
        menu: 'visible transition',
    };

    const dropdownRef = useRef()

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (dropdownRef.current.contains(e.target)) {
                return;
            }

            setIsDropdownActive(false);
        }, { capture: true });
    }, [])

    const renderedOptions = props.options.map((option) => {
        if (props.selectedColor.value === option.value) return null;

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => props.onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    });

    return (
        <div className="ui form" ref={dropdownRef}>
            <div className="field">
                <label className="label">{props.labelText}</label>
                <div
                    className={`ui selection dropdown ${isDropdownActive ? activeDropdownStyles.dropdown : ''}`}
                    onClick={() => setIsDropdownActive(!isDropdownActive)}
                >
                    <i className="dropdown icon" />
                    <div className="text">{props.selectedColor.label}</div>
                    <div className={`menu ${isDropdownActive ? activeDropdownStyles.menu : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown
