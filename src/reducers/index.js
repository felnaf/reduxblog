import { combineReducers } from 'redux';

const dummyReducer = () => '';

const postsReducer = (state = [], action) => {
  // debugger;
  if (action.type === 'GET_POSTS') {
    // console.log(action.payload);
    // return [...state, action.payload];
    state = action.payload;
  }
  return state;
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER':
      return [...state, action.payload];
    default:
      return state;
  }
};
export default combineReducers({
  dummy: dummyReducer,
  posts: postsReducer,
  users: userReducer,
});
