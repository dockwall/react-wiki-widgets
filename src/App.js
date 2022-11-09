import React, { useState } from "react";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

const App = () => {
    // This state represents active color in Dropdown
    // By default first color is selected (red)
    const [selectedColor, setSelectedColor] = useState(dropdownOptions[0])

    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={accordionMockupItems} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label="Select a Color Scheme"
                    options={dropdownOptions}
                    selected={selectedColor}
                    onSelectedChange={setSelectedColor}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
};

export default App
