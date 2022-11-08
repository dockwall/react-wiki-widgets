import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

// For Accordion list I use mock object
const accordionMockupItems = [
    {
        title: 'What is React?1',
        content: 'description1',
    },
    {
        title: 'What is React?2',
        content: 'description2',
    },
    {
        title: 'What is React?3',
        content: 'description3',
    },
]

// For Dropdown I use config object
const dropdownOptions = [
    {
        label: 'The Red Color',
        value: 'red',
    },
    {
        label: 'The Green Color',
        value: 'green',
    },
    {
        label: 'The Blue Color',
        value: 'blue',
    },
]

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={accordionMockupItems} />
    }
};

const showSearch = () => {
    if (window.location.pathname === '/search') {
        return <Search />
    }
};

const showDropdown = () => {
    // This state represents active color in Dropdown
    // By default first color is selected (red)
    const [selectedColor, setSelectedColor] = useState(dropdownOptions[0])
    if (window.location.pathname === '/dropdown') {
        return (
            <Dropdown
                options={dropdownOptions}
                labelText="Select a Color Scheme"
                selected={selectedColor}
                onSelectedChange={setSelectedColor}
            />
        )
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
};

const App = () => {
    return (
        <div>
            {showAccordion()}
            {showSearch()}
            {showDropdown()}
            {showTranslate()}
        </div>
    )
};

export default App
