import { combineReducers } from 'redux';

import prices from './stock_prices_reducer';

export default combineReducers({
    prices,
});
