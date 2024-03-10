import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// const initialTask = localStorage.getItem("shorturls")
//   ? JSON.parse(localStorage.getItem("shorturls"))
//   : null;

const initialUrl = null

const initialState = {
    urlData: initialUrl,
    AllUrls: {},
  };

  export const urlSlice = createSlice({
    name: "shorturl",
    initialState,
  
    reducers: {
      // Reducer for successful task addition
      urlAddedSuccessfully: (state, action) => {
        state.urlData = action.payload;
      },
      // Reducer for task addition failure
      urlAddFailure: (state) => {
        return state;
      },
      // Reducer for successful retrieval of all tasks
      getAllUrlSuccess: (state, action) => {
        state.AllUrls = action.payload;
      },
      // Reducer for failure in retrieving all tasks
      getAllUrlFailure: (state) => {
        return state;
      },
      // Reducer for successful task edit
      redirectUrlSuccess: (state, action) => {
        state.urlData = action.payload;
      },
      redirectUrlFailure: (state) => {
        return state;
      },
      // Reducer for successful task deletion
      deleteSuccess: (state, action) => {
        state.urlData = action.payload;
      },
      // Reducer for task deletion failure
      deletefail: (state) => {
        return state;
      },
    },
  });

  export const {
    urlAddFailure,
    urlAddedSuccessfully,
    getAllUrlFailure,
    getAllUrlSuccess,
    deleteSuccess,
    deletefail,
    redirectUrlSuccess,
    redirectUrlFailure
  } = urlSlice.actions;

  export default urlSlice.reducer;

  export const getAllUrls = () => async (dispatch: Dispatch) => {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   params: {
    //     id,
    //   },
    // };
  
    try {
      const response = await axios.get(
        "http://localhost:4000/api/shorturls",
      );
  
      if (response) {
        dispatch(getAllUrlSuccess(response.data));
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        dispatch(getAllUrlFailure());
      }
    }
  };

  export const deleteItem = (id:any) => async (dispatch: Dispatch) => {
    let res = await axios.delete(`http://localhost:4000/api/shorturls/${id}`);
  
    if (res) {
      dispatch(deleteSuccess(res.data));
      toast.success("Task deleted successfully");
      window.location.reload();
    } else {
      dispatch(deletefail());
    }
  };
  
  export const redirectUrl = (shortId: any) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/${shortId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response) {
        console.log(response.data);
        dispatch(redirectUrlSuccess(response.data));
        window.location.reload();
      }
    } catch (error) {
      console.error('Error:', error);
      dispatch(redirectUrlFailure())
    }
  }