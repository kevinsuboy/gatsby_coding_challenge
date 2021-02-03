import { RECEIVE_PRICES } from '../actions/stock_actions';

const TweetsReducer = (state = { }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRICES:
            newState[action.symbol] = action.tweets.data;
            return newState;
        default:
            return state;
    }
};

export default TweetsReducer;