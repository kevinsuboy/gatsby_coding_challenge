import React, { Component } from 'react';
import StockContainer from './stock/stock_container'
import './newsfeed.scss'

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { holding, symbol, company, quote, description, apiErrors } = this.props;

    return (
      <div className="newsfeed">
        <div className="newsfeed__container">
          <StockContainer symbol="FB" />
          <StockContainer symbol="AAPL" />
          <StockContainer symbol="AMZN" />
          <StockContainer symbol="NFLX" />
          <StockContainer symbol="GOOG" />
        </div>
      </div>
      );
  }
}
