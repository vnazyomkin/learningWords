import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/dictionary'>Словарь</NavigationItem>
            <NavigationItem link='/learning'>Обучение</NavigationItem>
            <NavigationItem link='/' exact>Дом</NavigationItem>
        </ul>
    );
}

export default navigationItems;