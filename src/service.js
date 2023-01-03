import typicode from './api/typicode';

const getPosts = () => {
  return typicode.get('posts');
};

const getUserDetail = (id) => {
  return typicode.get(`users/${id}`);
};
export default {
  getPosts,
  getUserDetail,
};
