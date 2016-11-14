'use strict';

const initialState = {
    play: false
};

const play = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PLAY':
            return Object.assign({}, state, {
               play: !state.play
            });

        default:
            return state;
    }
};

export default play;