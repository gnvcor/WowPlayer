'use strict';

import React, { Component } from 'react';

export default class ButtonNextComponentView extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="button-control button-control__next" onClick={console.log("next")}>
                <i className="fa fa-step-forward"></i>
            </div>
        )
    }
}