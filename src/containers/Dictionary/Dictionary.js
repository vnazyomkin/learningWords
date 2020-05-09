import React, {Component} from 'react';

import classes from './Dictionary.module.css'
import Word from '../../components/Word/Word'

class Dictionary extends Component {
    state = {
        dictionary:
          [
              {
                words: "hellow",
                translate: "привет",
                countReapet: 0,
                dateReapet: "",
              },
              {
                words: "World",
                translate: "Мир",
                countReapet: 0,
                dateReapet: "",   
              }
          ],
    }

    render() {
        return (
        <div className={classes.Dictionary}>
            <Word></Word>
            <Word></Word>
        </div>
        );
    }
}

export default Dictionary;