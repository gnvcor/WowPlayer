'use strict';

import { connect } from 'react-redux';
import { changeTrackLine } from '../../actions';
import { togglePlay } from '../../actions';
import TrackLineComponentView from './TrackLineComponentView.jsx';
import Api from '../../ApiMusic';
import store from '../../store';

const mapStateToProps = (state) => {
    return state.track
};

const mergeProps = (stateProps, dispatchProps) => {
    const { trackTime, duration } = stateProps;
    const { dispatch } = dispatchProps;
    let state = store.getState();

    return {
        trackTime: trackTime,
        duration: duration,
        changeTrackLine: (component, trackTime) => {
            dispatch(changeTrackLine(trackTime, duration));
            Api.setTimerValue(trackTime);
        },
        changeTrackLineComplete: (component, trackTime) => {
            dispatch(changeTrackLine(trackTime, duration));
            if (state.play.play == true) {
                Api.playAction();
            }
        }
    };
};

const TrackLineComponentContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TrackLineComponentView);

export default TrackLineComponentContainer;