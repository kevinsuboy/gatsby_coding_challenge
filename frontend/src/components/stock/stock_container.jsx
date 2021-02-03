import { connect } from 'react-redux';
import Stock from './stock';
import { withRouter } from 'react-router-dom';
import { fetchStockPrices } from '../../actions/stock_actions';

const mapStateToProps = (state) => {
};

const mapDispatchToProps = ( dispatch ) => ({
    fetchStockPrices: (symbol, interval) => dispatch(fetchStockPrices(symbol,interval))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stock));
