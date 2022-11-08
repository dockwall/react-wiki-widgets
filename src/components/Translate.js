import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// Config object for translate languages. It can be expanded

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
    },
    {
        label: 'Russian',
        value: 'ru'
    }
];

const Translate = () => {
    // This state represents selected language to translate
    const [selectedLanguage, setSelectedLanguage] = useState(translateOptions[0]);
    // this state represents text typing by user
    // !NOTE - there is debounce fn for text in Convert component
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
            <hr />
            <h2 className="ui header">Translated output text</h2>
            <Convert
                language={selectedLanguage}
                text={translateText}
            />
        </div>
    )
}

export default Translate;
