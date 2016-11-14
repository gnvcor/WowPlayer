'use strict';

const initialState = {
    volume: 30
};

const volume = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_VOLUME':
            return Object.assign({}, state, {
                volume: action.volume
            });

        default:
            return state;
    }
};

export default volume;