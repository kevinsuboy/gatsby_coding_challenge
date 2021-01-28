import { connect } from 'react-redux';
import { SidebarContent } from './sidebar_content'

const mapStateToProps = (state) => ({
  // theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContent);
