import { configureStore } from '@reduxjs/toolkit';
import users from '../features/Gigs/gigSlice'

export const store = configureStore({
  reducer: {
    users,
  },
});
