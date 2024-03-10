// Importing the necessary function from '@reduxjs/toolkit' to configure the Redux store
import { configureStore } from "@reduxjs/toolkit";

// Importing the reducers for authentication and tasks
import authReducer from "./authSlice";
import urlSliceReducer from "./urlSlice";

// Configuring the Redux store with the combined reducers
export const store = configureStore({
  reducer: { auth: authReducer, shortUrls: urlSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
