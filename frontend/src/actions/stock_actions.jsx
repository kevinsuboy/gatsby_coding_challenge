import * as APIUtil from '../util/stocks_api'

export const RECEIVE_PRICES = "RECEIVE_PRICES";

export const receivePrices = (symbol, prices) => ({
    type: RECEIVE_PRICES,
    symbol,
    prices
});

export const fetchStockPrices = (symbol) => dispatch => (
    APIUtil.fetchPrices(symbol)
        .then(prices => dispatch(receivePrices(symbol, prices)))
);
