import { configureStore } from "@reduxjs/toolkit";
import enquiryFormSliceReducer from "./EnquirySlice";
import authReducer from './AuthSlice';

export const store = configureStore({
  reducer: {
    Enquiries: enquiryFormSliceReducer,
    Auth: authReducer
  },
});
