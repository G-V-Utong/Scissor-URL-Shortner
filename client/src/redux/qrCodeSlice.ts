import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { SERVER_ENDPOINT } from "../config";

const initialQRcode = null

const initialState = {
    qrCodeData: initialQRcode,
    AllQrCodes: {},
}

export const qrCodeSlice = createSlice({
    name: "QRcode",
    initialState,

    reducers: {
        qrCodeCreatedSuccessfully: (state, action) => {
            state.qrCodeData = action.payload
        },

        qrCodeCreatedFailure: (state) => {
            return state
        }
    }
});

export const {
    qrCodeCreatedSuccessfully,
    qrCodeCreatedFailure
} = qrCodeSlice.actions;

export default qrCodeSlice.reducer;

export const createQrCode = (shortId: any) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.post(
            `${SERVER_ENDPOINT}/api/qrcode`, {shortId}
        )
        if (response) {
            dispatch(qrCodeCreatedSuccessfully(response.data));
            toast.success("QR Code created successfully");
          } else {
            dispatch(qrCodeCreatedFailure());
          }
    } catch (error: any) {
        if (error.response.status === 400) {
          dispatch(qrCodeCreatedFailure());
        }
      }
};