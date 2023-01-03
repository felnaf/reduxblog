import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

const App = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

const MapStateToProps = (state) => {
  console.log('state' ,state);
  return {};
};

export default connect(MapStateToProps)(App);
