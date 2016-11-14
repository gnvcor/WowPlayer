'use strict';

export const togglePlay = (play) => {
  return {
      type: 'TOGGLE_PLAY',
      play
  }
};

export const changeVolume = (volume) => {
    return {
        type: 'CHANGE_VOLUME',
        volume
    }
};

export const changeTrackLine = (trackTime, duration) => {
    return {
        type: 'CHANGE_TRACK_LINE',
        trackTime,
        duration
    }
};

export const addUrlTrack = (url) => {
    return {
        type: 'ADD_URL_TRACK',
        url
    }
};