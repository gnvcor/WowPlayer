'use strict';

import { createStore } from 'redux';
import mainReducers from '../reducers';

const store = createStore(mainReducers);

export default store;