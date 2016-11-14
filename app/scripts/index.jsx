'use strict';

import ReactDOM from 'react-dom';
import KernelComponent from './components/KernelComponent.jsx';
import { Provider } from 'react-redux';
import store from './store';

let appId = document.getElementById('app');

if (appId) {
    ReactDOM.render(<Provider store={store}><KernelComponent /></Provider>, appId);
}