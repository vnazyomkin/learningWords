import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Dictionary.module.css';
import Word from '../../components/Word/Word';
import * as actions from '../../store/actions/index';
import word from '../../components/Word/Word';



class Dictionary extends Component {


    componentDidMount() {
      if (!this.props.dictionary) {
        this.props.onStartLoadDictionary(); 
      }
    }

    render() {
        let words = [];
        if(!this.props.loading) {
          for (let id in this.props.dictionary) {
            words.push(
            <Word 
              word={this.props.dictionary[id].en}
              translate={this.props.dictionary[id].ru}
              key={id}>
            </Word>
            )
          }
        }
        return (
        <div className={classes.Dictionary}>
            {words}
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    dictionary: state.dictionary.dictionary,
    loading: state.dictionary.loading,
    err: state.dictionary.err,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStartLoadDictionary: () => dispatch(actions.loadDictionary()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);