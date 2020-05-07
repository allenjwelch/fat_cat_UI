import React from 'react';

export const Button = (props) => {
    const { className, onClick, text } = props;

    const btnStyles = {
        // background: 'red'
        width: '200px',
        padding: '10px',
        border: '1px solid #999',
        borderRadius: '5px',
        margin: '0 auto'
    }
    return (
        <div className={className} style={{ margin: '20px'}}>
            <button style={btnStyles} onClick={onClick}>
                {text}
            </button>
        </div>
    );
};
