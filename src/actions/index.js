import service from '../service';
import { onlyUnique } from '../utils';

export const getPosts = () => async (dispatch, getState) => {
  const data = await service.getPosts();
  // console.log(service.getPosts());
  dispatch({
    type: 'GET_POSTS',
    payload: data.data,
  });
};

export const getUserDetail = (id) => async (dispatch) => {
  const data = await service.getUserDetail(id);
  // console.log(service.getUserDetail(id));
  dispatch({
    type: 'GET_USER',
    payload: data.data,
  });
};

export const getPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(getPosts());
  console.log('getPosts', getState());
  const userIds = getState()
    .posts.map((d) => d.userId)
    .filter(onlyUnique);
  console.log(userIds);

  userIds.forEach((id) => {
    dispatch(getUserDetail(id));
  });

  // });

  // });
};

// const data = await service.getPosts();
// //   console.log(data);

//   return {
//     type: 'GET_POSTS',
//     payload: data.data,
//   };
