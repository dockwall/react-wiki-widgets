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

    // Google API key has a one restriction - it works correctly only if host is local and port is 3000
    if (window.location.host !== 'localhost:3000') {
        return (
            <div>
                <h1>In this host there is no possibility of this widget work</h1>
                <h2>Please use localhost:3000 instead</h2>
            </div>
        );
    }

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
