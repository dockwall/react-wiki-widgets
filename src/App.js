import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const mockupItems = [
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

const App = () => {
    return (
        <div>
            {/* <Accordion items={mockupItems} /> */}
            <Search />
        </div>
    )
};

export default App
