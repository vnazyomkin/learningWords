import React from 'react';

import classes from './Word.module.css'

const word = (props) => {
    return (
        <div className={classes.Words}>
            <div className={classes.Word}> Слово</div>
            <div className={classes.Word}>Перевод</div>
        </div>
    );
}

export default word;