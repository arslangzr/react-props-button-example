import React from "react";

function Button(props) {
    const { color } = props;

    return (
        <button style={{ backgroundColor: color }}>
            Click me!
        </button>
    );
}

export default Button;
