import { connect } from 'react-redux';
import Stock from './stock';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
};

const mapDispatchToProps = ( dispatch ) => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stock));
