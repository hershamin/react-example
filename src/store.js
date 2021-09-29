import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from './stores/example';

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
