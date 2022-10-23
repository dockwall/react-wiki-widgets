import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const sendRequest = async () => {
            const { data } = await axios.get('https://ru.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: searchValue,
                    },
                })

            setSearchResults(data.query.search);
        }

        if (searchValue) sendRequest();
    }, [searchValue])

    // dangerouslySetInnerHTML is a very riskful way to parse response string.
    // I use it because there is no account system or something else confident in this App.

    const renderedResults = searchResults.map(({ title, snippet, pageid }) => {
        return (
            <div key={pageid} className='item'>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://ru.wikipedia.org?curid=${pageid}`}
                    >
                        Go to Full version
                    </a>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        className="input"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    >
                    </input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search