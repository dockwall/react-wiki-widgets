import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
    // This state represents Dropdown menu active/unactive visibility
    const [isDropdownActive, setIsDropdownActive] = useState(false)

    // This is a config object with styles for active Dropdonwn
    const activeDropdownStyles = {
        dropdown: 'visible active',
        menu: 'visible transition',
    };

    // This ref belongs to Dropdown most parent div
    const dropdownRef = useRef()

    // This useEffect configured to run only once when component was rendered
    useEffect(() => {
        // This click handler turns off active Dropdown if user clicks anywhere other than Dropdown
        const onBodyClick = (e) => {
            if (dropdownRef.current.contains(e.target)) {
                return;
            }

            setIsDropdownActive(false);
        }

        // Add handler above to body, configured to intercepts capture stage
        document.body.addEventListener('click', onBodyClick, { capture: true });

        // cleanup function for delete click handler at the body
        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        }
    }, [])


    // Construct Dropdown color elements from config objects in props
    const renderedOptions = props.options.map((option) => {
        // Filter selected color in all color options
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

    // ternary operators to choose current Semantic UI styles
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
