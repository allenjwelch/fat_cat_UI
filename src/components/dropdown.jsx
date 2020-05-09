import React from 'react';

export const DropDown = (props) => {
    const { className, onChange, defaultValue } = props;

    return (
        <div className={className}>
            <select onChange={onChange} value={defaultValue}>
                <option value='normal'>Normal</option>
                <option value='extra'>Extra</option>
                <option value='snack'>Snack</option>
            </select>
        </div>
    );
};
