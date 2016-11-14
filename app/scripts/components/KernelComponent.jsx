'use strict';

import React, { Component } from 'react';
import ButtonPlayComponent from './ButtonPlayComponent/ButtonPlayComponentContainer.jsx';
import TrackVolumeComponent from './TrackVolumeComponent/TrackVolumeComponentContainer.jsx';
import TrackLineComponent from './TrackLineComponent/TrackLineComponentContainer.jsx';
import ButtonNextComponentContainer from './ButtonNextComponent/ButtonNextComponentContainer.jsx';
import ButtonPrevComponentContainer from './ButtonPrevComponent/ButtonPrevComponentContainer.jsx';
import TrackListComponentContainer from './TrackListComponent/TrackListComponentContainer.jsx';

export default class KernelComponent extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="kernel-component">
                <div className="kernel-component__top">
                    <ButtonPrevComponentContainer />
                    <ButtonPlayComponent />
                    <ButtonNextComponentContainer />
                    <TrackLineComponent />
                    <TrackVolumeComponent />
                </div>
                <div className="kernel-component__bottom">
                    <TrackListComponentContainer />
                </div>
            </div>
        )
    }
};