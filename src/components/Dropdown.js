import React, { useState, useEffect, useRef } from "react";

// !IN FUTURE
// This is a component for choosing and changing App color scheme
// It will use Dropdown as reusable component

const Dropdown = (props) => {
    // This state represents active color in Dropdown
    // By default first color is selected (red)
    const [selectedColor, setSelectedColor] = useState(props.options[0])

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
        if (selectedColor.value === option.value) return null;

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => setSelectedColor(option)}
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
                    <div className="text">{selectedColor.label}</div>
                    <div className={`menu ${isDropdownActive ? activeDropdownStyles.menu : ''}`}>{renderedOptions}</div>
                </div>
            </div>
            <h1
                style={{
                    textAlign: 'center',
                    color: selectedColor.value,
                    marginTop: '250px',
                }}
            >The color is {selectedColor.value}!</h1>
        </div>
    )
};

export default Dropdown
