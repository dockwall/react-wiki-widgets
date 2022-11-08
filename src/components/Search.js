import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    // This state represents value for search request (String from user)
    const [searchValue, setSearchValue] = useState('');
    // This state represents response from Wiki API (array)
    const [searchResults, setSearchResults] = useState([]);

    // useEffect configurated for runs every time after searchValue update
    // useEffect = something like a componentDidUpdate(), but configurable
    // useEffect can return "cleanup" function (it calls firstly when useEffect runs again)

    // We can configure scenarios of useEffect run (second argument)
    // If nothing => useEffect runs with every state updating
    // If [] => useEffect runs only one time after component was render
    // If [state] => useEffect runs only if this state was update

    // NOTE: There is a debounce fn for setSearchValue
    useEffect(() => {
        // When useEffect runs, async/await axios starts with request (current searchValue)
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
                });

            // After that, when we get response, we set it to searchResults
            setSearchResults(data.query.search);
        }

        // There is a min time after that request creates (if user no longer writes anything in this time)
        // Timer can be changed (second argument of setTimeout)

        const searchTimeoutId = setTimeout(() => {
            if (searchValue) sendRequest();
        }, 500)

        // I use return useEffect() cleanup function for timer reseting
        // If user starts typing rather than one symbol in 500ms, useEffect runs again, cleanup fn resets timer
        return () => clearTimeout(searchTimeoutId)

    }, [searchValue])


    // This is a list of results with a "Go to source" button
    // Wiki returns HTML string instead of text
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