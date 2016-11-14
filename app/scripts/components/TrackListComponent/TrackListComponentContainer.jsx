'use strict';

import { connect } from 'react-redux';
import { addUrlTrack, togglePlay} from '../../actions';
import TrackListComponentView from './TrackListComponentView.jsx';
import Api from '../../ApiMusic';
import data from '../../data/data.json';
import store from '../../store';

const mapStateToProps = (state) => {
    return state.url
};

const mergeProps = (stateProps, dispatchProps) => {
    const { url } = stateProps;
    const { dispatch } = dispatchProps;
    let state = store.getState();

    const add = (url = url) => {
        Api.loadSoundFile(url);

        dispatch(addUrlTrack(url));
        if (state.play.play != true) {
            dispatch(togglePlay(false));
        }
    };

    let dataTrack = JSON.parse(JSON.stringify(data.tracks));

    let array = [];

    for (let i in dataTrack) {
        array.push(dataTrack[i]);
    }

    return {
        data: array,
        url: url,
        addUrlTrack: (url) => {
            add(url);
        }
    };
};

const TrackListComponentContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TrackListComponentView);

export default TrackListComponentContainer;
