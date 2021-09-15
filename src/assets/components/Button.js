import React from "react";

function Button({children, isDisabled})   {
    return  (
        <button disabled={isDisabled}>{children}</button>
    );
}

export default Button;

// disabled = {isDisabled} --> in Button op true of false zetten.
// Lorem.