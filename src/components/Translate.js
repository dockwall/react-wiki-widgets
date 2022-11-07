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
    const [translateText, setTranslateText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter a term to translate</label>
                    <input
                        className="input"
                        value={translateText}
                        onChange={(e) => setTranslateText(e.target.value)}
                    >
                    </input>
                </div>
            </div>
            <Dropdown
                options={translateOptions}
                labelText="Select a language"
                selected={selectedLanguage}
                onSelectedChange={setSelectedLanguage}
            />
        </div>
    )
}

export default Translate;
