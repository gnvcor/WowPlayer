'use strict';

import { connect } from 'react-redux';
import { togglePlay } from '../../actions';
import ButtonPrevComponentView from './ButtonPrevComponentView.jsx';
import Api from '../../ApiMusic';

const mapStateToProps = (state) => {
    return state;
};

/*const mergeProps = (stateProps, dispatchProps) => {
    const { play } = stateProps;
    const { dispatch } = dispatchProps;

    const toggle = () => {
        dispatch(togglePlay());
        if (play != true) {
            Api.playAction();
        } else {
            Api.stopAction();
        }
    };

    return {
        play: play,
        togglePlay: () => {
            toggle();
        }
    };
};*/

const ButtonPrevComponentContainer = connect(
    mapStateToProps,
    null
)(ButtonPrevComponentView);

export default ButtonPrevComponentContainer;