import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/menu/menuSlice'

export default configureStore({
  reducer: {
    menu: counterReducer,
  },
});
