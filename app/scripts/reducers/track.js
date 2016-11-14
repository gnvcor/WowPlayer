'use strict';

const initialState = {
    trackTime: 0,
    duration: 0
};

const track = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TRACK_LINE':
            return Object.assign({}, state, {
                trackTime: action.trackTime,
                duration: action.duration
            });

        default:
            return state;
    }
};

export default track;