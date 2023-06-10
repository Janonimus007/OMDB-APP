import { configureStore } from '@reduxjs/toolkit'
import { peliculasSlice } from './slices/peliculasSlice'

export const store = configureStore({
  reducer: {
    peliculas: peliculasSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch