'use strict';

import React, { Component } from 'react';

export default class TrackListComponentView extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="track-list">
                {this.props.data.map((item, i) => (
                    <div key={i} className="track-list__item" onClick={this.props.addUrlTrack.bind(this, item.url)}>
                        <div className="track-list__item-left">
                            <div className="track-list__artist">{item.artist}</div>
                            <div className="track-list__delimiter">–</div>
                            <div className="track-list__name-track">{item.nameTrack}</div>
                        </div>
                        <div className="track-list__item-right">
                            <div className="track-list__time"></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
