import React from 'react';

import classes from './MainPage.module.css'

const mainPage = (props) => {
    return (
    <div className={classes.MainPage}>{props.children}</div>
    );
}

export default mainPage;