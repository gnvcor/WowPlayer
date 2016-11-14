'use strict';

import React, { Component } from 'react';
import InputRange from 'react-input-range';

export default class TrackVolumeComponentView extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="track-volume">
                <InputRange
                    maxValue={100}
                    value={this.props.volume}
                    onChange={this.props.changeVolume}
                />
            </div>
        )
    }
}