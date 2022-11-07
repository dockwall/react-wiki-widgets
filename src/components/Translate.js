import React, { useState } from "react";
import Dropdown from "./Dropdown";

const translateOptions = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(translateOptions[0]);

    return (
        <div>
            <h1>Hello!</h1>
            <Dropdown
                options={translateOptions}
                labelText="Select a language to translate"
                selected={selectedLanguage}
                onSelectedChange={setSelectedLanguage}
            />
        </div>
    )
}

export default Translate;
