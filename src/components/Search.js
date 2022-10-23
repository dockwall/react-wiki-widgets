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
        </div>
    )
};

export default Search