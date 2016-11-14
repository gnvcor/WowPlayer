'use strict';

import { connect } from 'react-redux';
import { changeVolume } from '../../actions';
import TrackVolumeComponentView from './TrackVolumeComponentView.jsx';
import Api from '../../ApiMusic';

const mapStateToProps = (state) => {
    return state.volume
};

const mergeProps = (stateProps, dispatchProps) => {
    const { volume } = stateProps;
    const { dispatch } = dispatchProps;

    const change = (volume = volume) => {
        dispatch(changeVolume(volume));
        Api.setVolumeValue(volume);
    };

    return {
        volume: volume,
        changeVolume: (component, volume) => {
            change(volume);
        }
    };
};

const TrackVolumeComponentContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TrackVolumeComponentView);

export default TrackVolumeComponentContainer;