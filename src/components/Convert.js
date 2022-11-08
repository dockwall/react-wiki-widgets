import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
    return (
        <div>
            <h1>Hello!</h1>
            <h2>{language.value}</h2>
            <h2>{text}</h2>
        </div>
    );
}

export default Convert;
