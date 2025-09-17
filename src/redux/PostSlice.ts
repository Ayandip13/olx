import { createSlice } from '@reduxjs/toolkit';

export const PostSlice = createSlice({
  name: 'post',
  initialState: {
    data: [] as any[],
  },
  reducers: {
    addPost(state, action) {
      state.data.push(action.payload);
    },
    addToWishList(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { addPost, addToWishList } = PostSlice.actions;
export default PostSlice.reducer;
