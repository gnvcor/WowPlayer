'use strict';

import { connect } from 'react-redux';
import { togglePlay } from '../../actions';
import ButtonNextComponentView from './ButtonNextComponentView.jsx';
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

const ButtonNextComponentContainer = connect(
    mapStateToProps,
    null
)(ButtonNextComponentView);

export default ButtonNextComponentContainer;