import * as actionTypes from '../actions/actionTypes';

const initialState = {
    dictionary: null,
    loading: false,
    err: null,
};

const startLoadDictionaty = (state, action) => {
    return {
        ...state,
        loading: true,
        err: null,
    }
};

const loadDictionatySuccess = (state, action) => {
    saveDictionaryLocal(action.dict);
    return {
        ...state,
        loading: false,
        dictionary: action.dict,
    };
};

const loadDictionatyFail = (state, action) => {
    return {
        ...state,
        loading: false,
        err: action.err
    };
};

const getDictionaryFromLocalstore = (state, action) => {
    return {
        ...state,
        loading: false,
        err: null,
        dictionary: localStorage.getItem('dictionary'),
    }
};

const saveDictionaryLocal = (dict) => {
    console.log(dict);
    localStorage.dictionary = dict;
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.START_LOAD_DICTIONARY: return startLoadDictionaty(state, action);
        case actionTypes.LOAD_DICTIONARY_SUCCESS: return loadDictionatySuccess(state, action);
        case actionTypes.LOAD_DICTIONARY_FAIL: return loadDictionatyFail(state, action);
        case actionTypes.GET_DICTIONARY_FROM_LOCALSTORE: return getDictionaryFromLocalstore(state, action);
        default: return state;
    }
};

export default reducer;