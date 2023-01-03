import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserDetail } from '../actions';

const UserHeader = ({ userID, user }) => {
  // useEffect(() => {
  //   getUserDetail(userID);
  // }, []);

  // const user = users.find((user) => user.id === userID);
  if (!user) {
    return null;
  }
  return <div>User: {user.name}</div>;
};

const MapStateToProps = ({ users },ownProps) => {
  const user = users.find((user) => user.id === ownProps.userID);

  return {
    user: user,
  };
};
export default connect(MapStateToProps)(
  UserHeader
);
