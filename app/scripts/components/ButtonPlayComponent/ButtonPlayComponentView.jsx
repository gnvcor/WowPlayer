'use strict';

import React, { Component } from 'react';

export default class ButtonPlayComponentView extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="button-play" onClick={this.props.togglePlay}>
                <i className={ this.props.play == false ? "fa fa-play" : "fa fa-pause" }></i>
            </div>
        )
    }
}