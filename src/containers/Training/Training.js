import React, { Component } from 'react';

import Learning from '../../components/Training/Learning/Learning';

class Training extends Component {
    state = {
        dictionary: [
            {
                word: "hellow",
                translate: ["привет",],
                countReapet: 0,
                dateReapet: "",
            },
            {
                word: "World",
                translate: ["Мир",],
                countReapet: 0,
                dateReapet: "",   
            } 
        ]
    };
    render(){
        return <div><Learning words = {this.state.dictionary}/></div>
    }
}

export default Training;