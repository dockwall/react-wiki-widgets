import React, { useState, useEffect } from "react";
import axios from "axios";

// API key in axios works only at the localhost:3000

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')


    useEffect(() => {
        if (!text) return;

        const sendRequest = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                }
            }
            )

            setTranslated(data.data.translations[0].translatedText)
        }

        sendRequest()


    }, [language, text])
    return (
        <div>
            <h3 className="ui header">{translated}</h3>
        </div>
    );
}

export default Convert;
