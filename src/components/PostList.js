import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostAndUsers } from '../actions';
import UserHeader from './UserHeader';

const PostList = (props) => {
  console.log('post', props.posts);

  useEffect(() => {
    props.getPostAndUsers();
  }, []);

  const renderedList = props.posts.map((p, index) => {
    return (
      <div key={index}>
        <p>
          {index + 1} {p.title}
        
        </p>
        <UserHeader userID ={p.userId} />
      </div>
    );
  });
  return <div>{renderedList}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { getPostAndUsers: getPostAndUsers })(PostList);
