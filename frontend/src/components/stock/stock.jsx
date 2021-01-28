import React, { Component } from 'react';
import StockPriceGraphContainer from './graph/stock_price_graph_container';
import StockSidebar from './sidebar/stock_sidebar';

export default class Stock extends Component {
  constructor(props) {
    super(props);
  }

  // fetchStockShowData() {
  //   this.props.fetchStockShowData({
  //     symbol: this.props.symbol,
  //     // quotes: {}, prices: {}, companies: {},
  //     ...this.props.entities,
  //   });
  // }

  componentDidMount() {
    // this.fetchStockShowData();
  }

  componentDidUpdate(prevProps) {
    // if (this.props.symbol !== prevProps.symbol) this.fetchStockShowData();
  }

  render() {
    const { holding, symbol, company, quote, description, apiErrors } = this.props;

    return (
      <div className="stock-container">
        <div className="stock-main-container">
          <h1>{company && company['companyName']}</h1>

          <div>
            <StockPriceGraphContainer quote={quote} symbol={symbol} />
            </div>
        </div>

        <div className="stock-sidebar-container">
          <StockSidebar {...props} />
        </div>
      </div>
    );
  }
}
