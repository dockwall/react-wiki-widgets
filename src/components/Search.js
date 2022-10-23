import React, { useState } from "react";

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

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