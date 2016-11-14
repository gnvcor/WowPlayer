'use strict';

const initialState = {
    url: ''
};

const url = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_URL_TRACK':
            return Object.assign({}, state, {
                url: action.url
            });

        default:
            return state;
    }
};

export default url;