import React, { useState, useEffect } from "react";
import axios from "axios";

// API key in axios works only at the localhost:3000

const Convert = ({ language, text }) => {
    // This state represents text from Google API response
    const [translated, setTranslated] = useState('');
    // This state represents text typing by user and DEBOUNCED (500ms by default)
    const [debouncedText, setDebouncedText] = useState(text);

    // useEffect only for debounce
    // If user stops typing for >=500ms (by default), next useEffect runs and create request
    // If user changes language, next useEffect runs instantly, without debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (text) setDebouncedText(text);
        }, 500)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [text])


    // useEffect for creating a request with DEBOUNCED text
    // If user changes language, this useEffect runs instantly, without debounce
    useEffect(() => {
        const sendRequest = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                }
            })

            setTranslated(data.data.translations[0].translatedText)
        }

        sendRequest()


    }, [language, debouncedText])
    return (
        <div>
            <h3 className="ui header">{translated}</h3>
        </div>
    );
}

export default Convert;
