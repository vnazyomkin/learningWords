import React from 'react';

import classes from './Word.module.css'

const word = (props) => {
    return (
        <div className={classes.Words}>
            <div className={classes.Word}>{props.word}</div>
            <div className={classes.Word}>{props.translate}</div>
            <button className={classes.delete}>X</button>
        </div>
    );
}

export default word;