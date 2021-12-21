import { configureStore } from '@reduxjs/toolkit';
import { populate } from './populateMiddleware';
import webContentReducer from './webContent';

const store = configureStore({
  reducer: {
    webContent: webContentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(populate),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
