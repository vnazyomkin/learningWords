import React from 'react';

import pgnLogo from '../../assets/images/pgn.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={pgnLogo} alt="PGN GNG"/>
    </div>
);

export default logo;