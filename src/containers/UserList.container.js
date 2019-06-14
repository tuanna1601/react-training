import { connect } from 'react-redux';

import UserList from '../components/UserList';
import { addUser, getUsers, editUser, deleteUser } from '../store/actions';

const mapStateToProps = state => ({
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  editUser: async (userId, user) => await dispatch(editUser(userId, user)),
  deleteUser: async userId => await dispatch(deleteUser(userId)),
  getUsers: async () => await dispatch(getUsers()),
  handleAddUser: async user => await dispatch(addUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
