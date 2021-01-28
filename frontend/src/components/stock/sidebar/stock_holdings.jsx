import React from 'react';

// import StockCell from '../../lists/cell/StockCell';
// import { fetchSidebarHoldingsData } from '../../../actions/portfolio_actions';

class StockHoldings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { quotes, prices } = this.props;
    // this.props.fetchSidebarHoldingsData({ quotes, prices });
  }

  render() {
    const { holdings, quotes } = this.props;
    return (
      <div className="stock-holdings">
        I AM STOCK HOLDINGS
        {/* {Object.keys(holdings).map((symbol, idx) => (
          <StockCell quote={quotes[symbol]} symbol={symbol} key={idx} />
        ))} */}
      </div>
    );
  }
}

export default StockHoldings;
