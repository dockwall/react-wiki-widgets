import React, { useState, useEffect } from "react";

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        console.log('Rerendered')
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