import { configureStore } from '@reduxjs/toolkit';
import postReducer from './PostSlice';
import wishlistReducer from './WishListSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
