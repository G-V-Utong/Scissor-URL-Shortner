// Importing necessary dependencies
import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../history";
// import { ThunkAction } from 'redux-thunk';
// import { RootState } from './store';
import { Dispatch } from "redux";

// Define the type of the action
// type RegisterSuccessAction = PayloadAction<void, string>;
// type RegisterFailureAction = PayloadAction<void, string>;

// Define the type of the thunk function
// export type RegisterThunk = ThunkAction<Promise<void>, RootState, unknown, RegisterSuccessAction| RegisterFailureAction>;
// Checking if there is a previously authenticated user in local storage

export type RegisterAction = (user: RegisterPayload) => (dispatch: Dispatch) => void;
export type LoginAction = (user: LoginPayload) => (dispatch: Dispatch) => void;
const storedAuth = localStorage.getItem("auth");
const initialUser = storedAuth ? JSON.parse(storedAuth) : null;

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string
}

export interface LoginPayload {
  password: string;
  usernameOrEmail: string
}

// Initial state for the authentication slice
const initialState = {
  isLoading: false,
  currentUser: initialUser,
  error: null,
};

// Creating the authentication slice
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Reducer for successful login
    loginSuccess: (state: { currentUser: any; isLoading: boolean; }, action: { payload: any; }) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    // Reducer for login failure
    loginFailure: (state: { error: any; }, action: { payload: any; }) => {
      state.error = action.payload;
    },
    // Reducer for successful registration
    registerSuccess: (state: { currentUser: any; isLoading: boolean; }, action: { payload: any; }) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    // Reducer for registration failure
    registerFailure: (state: { error: any; }, action: { payload: any; }) => {
      state.error = action.payload;
    },
    // Reducer for successful logout
    logoutSuccess: (state: { currentUser: null; }) => {
      state.currentUser = null;
    },
  },
});

// Exporting actions from the authentication slice
export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

// Exporting the authentication reducer
export default authSlice.reducer;

// Thunk action creator for user registration
export const register: RegisterAction = (user) => async (dispatch: Dispatch) => {
  const formdata = new FormData();

  try {
    // Appending user data to form data
    formdata.append("firstName", user.firstName);
    formdata.append("lastName", user.lastName);
    formdata.append("username", user.username);
    formdata.append("password", user.password);
    formdata.append("email", user.email);

    // Configuring headers for the request
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    // Sending a POST request to register the user
    const response = await axios.post(
      "http://localhost:4000/auth/register",
      user,
      config
    );

    // Handling the response
    if (response) {
      dispatch(registerSuccess(response.data));
      console.log(response.data);
      // Redirecting to the sign-in page after successful registration
      history.push("/signin");
      window.location.reload();
    } else {
      dispatch(registerFailure("Failed to register user"));
    }
  } catch (error) {
    dispatch(registerFailure("Failed to register user"));
  }
};

// Thunk action creator for user sign-in
export const signin : LoginAction = (user) => async (dispatch: Dispatch) => {
  try {
    // Sending a POST request to sign in the user
    const response = await axios.post(
      "http://localhost:4000/auth/signin",
      user
    );

    // Handling the response
    if (response) {
      // Storing the authentication data in local storage
      localStorage.setItem("auth", JSON.stringify(response.data));
      dispatch(loginSuccess(response.data));
      // Redirecting to the dashboard after successful sign-in
      history.push("/");
      window.location.reload();
    } else {
      dispatch(loginFailure("Login failed"));
    }
  } catch (error) {
    dispatch(loginFailure("Login failed"));
  }
};