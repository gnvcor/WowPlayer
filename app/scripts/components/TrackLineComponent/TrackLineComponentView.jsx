'use strict';

import React, { Component } from 'react';
import InputRange from 'react-input-range';

export default class TrackLineComponentView extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="track-line">
                <InputRange
                    maxValue={Number(this.props.duration)}
                    value={this.props.trackTime}
                    onChange={this.props.changeTrackLine}
                    onChangeComplete={this.props.changeTrackLineComplete}
                    formatLabel={(value)=>{return value == 0 ? 0 : Math.floor(value / 60) + ':' + value % 60}}
                />
            </div>
        )
    }
}