import React from "react";
import Accordion from "./components/Accordion";

const items = [
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
    return <div><Accordion items={items} /></div>
};

export default App
