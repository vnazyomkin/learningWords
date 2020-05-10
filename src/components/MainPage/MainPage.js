import React, {Component} from 'react';

import classes from './MainPage.module.css'

class MainPage extends Component {
    state = {
        sets: {
            "Lesson 1": [
                {
                    word: "hellow",
                    translate: "привет",
                    countReapet: 0,
                    dateReapet: "",
                },
                {
                    word: "World",
                    translate: "Мир",
                    countReapet: 0,
                    dateReapet: "",   
                }
            ],

            "Lesson 2": [
                {
                    word: "hellow",
                    translate: "привет",
                    countReapet: 0,
                    dateReapet: "",
                },
                {
                    word: "World",
                    translate: "Мир",
                    countReapet: 0,
                    dateReapet: "",   
                }                
            ]
        }
    }

    render() {
        return (
            <div className={classes.MainPage}>{this.props.children}</div>
            );
        }
    }

export default MainPage;