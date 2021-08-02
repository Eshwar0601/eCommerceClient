import React from "react";
import propTypes from "prop-types";
import { placeholder } from "@babel/types";

const Input = (type, name, placeholder, value, onChange) => {
    return (
        <div>
            <div className="from-group">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

Input.propTypes = {
    type: propTypes.string.isRequired,
    name: propTypes.string,
    placeholder: propTypes.string,
    value: placeholder.string.isRequired,
    onChange: propTypes.func.isRequired,
};

export default Input;
