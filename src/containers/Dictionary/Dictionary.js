import React, {Component} from 'react';

import classes from './Dictionary.module.css'
import Word from '../../components/Word/Word'

class Dictionary extends Component {
    state = {
        dictionary:
          [
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
    }

    render() {
        let words = this.state.dictionary.map( (word, index) => (
          <Word 
            word={word.word}
            translate={word.translate}
            key={index}>
          </Word> 
        ) );
        
        return (
        <div className={classes.Dictionary}>
            {words}
        </div>
        );
    }
}

export default Dictionary;