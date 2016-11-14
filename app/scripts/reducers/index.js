import { combineReducers } from 'redux';
import play from './play';
import volume from './volume';
import track from './track';
import url from './url';

const mainReducers = combineReducers({
    play,
    volume,
    track,
    url
});

export default mainReducers;