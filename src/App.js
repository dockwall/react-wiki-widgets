import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const App = () => {
    return (
        <div>
            {/* <Accordion items={accordionMockupItems} /> */}
            {/* <Search /> */}
            <Dropdown options={dropdownOptions} />
        </div>
    )
};

export default App
