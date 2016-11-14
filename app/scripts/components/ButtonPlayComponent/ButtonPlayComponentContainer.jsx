'use strict';

import { connect } from 'react-redux';
import { togglePlay } from '../../actions';
import ButtonPlayComponentView from './ButtonPlayComponentView.jsx';
import Api from '../../ApiMusic';

const mapStateToProps = (state) => {
    return state.play;
};

const mergeProps = (stateProps, dispatchProps) => {
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
};

const ButtonPlayComponentContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(ButtonPlayComponentView);

export default ButtonPlayComponentContainer;