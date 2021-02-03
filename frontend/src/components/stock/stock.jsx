import React, { Component } from 'react';
import LineGraph from './graph/linegraph';
import TimeLine from './graph/timeline';
import './stock.scss';

export default class Stock extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
          <div className="newsfeed__chart__section">
            <div className="newsfeed_ticker">
              <h1> {this.props.symbol} </h1>
            </div>
            <div className="newsfeed_price_asset">
              <h1> $114,656,84</h1>
              <p> $142.90 (-0,12) Today </p>
            </div>
            <div className="newsfeed__chart">
              <LineGraph />
              <TimeLine />
            </div>
          </div>
      );
  }
}
