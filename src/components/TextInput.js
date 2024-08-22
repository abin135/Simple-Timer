import React from 'react';

const TextInput = ({ value, onChange }) => {
    return (
        <input
        type='number'
        value={value}
        onChange={onChange}
        placeholder="Enter the amount of seconds"
        />
    );
};

export default TextInput;