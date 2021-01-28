import { connect } from 'react-redux';
import { StockHoldings } from './stock_holdings';
// import { fetchSidebarHoldingsData } from '../../../actions/portfolio_actions';

const mapStateToProps = (state) => ({
  // holdings: state.entities.holdings,
  // quotes: state.entities.quotes,
  // prices: state.entities.prices,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchSidebarHoldingsData: (stateData) =>
  //   dispatch(fetchSidebarHoldingsData(stateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockHoldings);
