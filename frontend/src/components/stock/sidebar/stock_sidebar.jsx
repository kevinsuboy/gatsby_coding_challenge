import React, { Component } from 'react';
// import { BiDotsHorizontalRounded } from '@react-icons/all-files/bi/BiDotsHorizontalRounded';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import SidebarContent from './sidebar_content';
import StockHoldings from './stock_holdings';

export default class StockSidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <SidebarContent {...this.props}>
        <div className="stock-sidebar-header">
          <h1>Stocks</h1>
          <button type="button" className="stock-sidebar-button">
            <BiDotsHorizontalRounded size={24} />
          </button>
        </div>
        <StockHoldings />
      </SidebarContent>
    );
  }
}
