'use strict';

import React, { Component } from 'react';

export default class ButtonPrevComponentView extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="button-control button-control__prev" onClick={console.log("prev")}>
                <i className="fa fa-step-backward"></i>
            </div>
        )
    }
}