import React from 'react';

export const Input = (props) => {
    const { className, onChange, label } = props;

    return (
        <div className={className}>
            <h4 style={{ marginBottom: '5px' }}>{label}</h4>
            <input type="password" name="password" onChange={onChange} style={{ width: '150px'}}/>
        </div>
    );
};