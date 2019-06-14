import { connect } from 'react-redux';

import UserList from './UserList';
import { addUser } from '../../../store/actions';

const mapStateToProps = state => ({
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  handleAddUser: async user => await dispatch(addUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
