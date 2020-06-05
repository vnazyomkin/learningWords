import axios from '../../hoc/axios';

import * as actionTypes from './actionTypes';

export const loadDictionary = () => {
    return dispatch => {
        dispatch(startLoadDictionaty());
        axios.get('/dictionary.json')
            .then(resp => {
                dispatch(loadDictionarySuccess(resp.data));
            })
            .catch(err => {
                dispatch(loadDictionarySuccess(err));
            });
    }
};

export const startLoadDictionaty = () => {
    return {
        type: actionTypes.START_LOAD_DICTIONARY,
    };
};

export const loadDictionarySuccess = (dict) => {
    return {
        type: actionTypes.LOAD_DICTIONARY_SUCCESS,
        dict: dict,
        
    };
};

export const loadDictionaryFail = (err) => {
    return {
        type: actionTypes.LOAD_DICTIONARY_FAIL,
        err: err,
    };
};




