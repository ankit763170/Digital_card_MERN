import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    websiteURL: '',
};

const enquiryFormSlice = createSlice({
  name: 'enquiry',
  initialState,
  reducers: {
    setData: (state, action) => {
      // You can use the payload from the action to update the state
      const {    firstName,
      lastName,
      email,
      phoneNumber,
      jobTitle,
      websiteURL} = action.payload;

      // Update the state with the new values
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.jobTitle=jobTitle;
      state.websiteURL=websiteURL;
    },
  },
});

export const { setData } = enquiryFormSlice.actions;
export default enquiryFormSlice.reducer;
