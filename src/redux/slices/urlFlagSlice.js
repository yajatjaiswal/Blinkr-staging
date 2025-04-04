import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PAN_MOBILE_ENTERED: true,
  OTP_MOBILE_VERIFIED: false,
  IS_SALARIED_EMPLOYEE: false,
  ADDRESS_ENTERED: false,
  REPAYMENT_LEFT: false,
  MAIL_ENTERED: false,
  OFFICIAL_MAIL_ENTERED: false,
  OTP_MAIL_VERIFIED: false,
  UPLOAD_BANK_STATMENT: false,
  LOAN_AMOUNT_SELECTED: false,
  ADHAR_ENTERED: false,
  ADHAR_VERIFIED: false,
  REFERENCES_ENTERED: false,
  E_SIGN: false,
  DISBURSAL: false,
  CONGRATS: false,
  DASHBOARD: false,
};

export const urlFlagSlice = createSlice({
  name: "url_flags",
  initialState,
  reducers: {
    phonePanA: (state) => {
      state.PAN_MOBILE_ENTERED = true;
    },
    otpMobileA: (state) => {
      state.PAN_MOBILE_ENTERED = false;
      state.IS_SALARIED_EMPLOYEE = true;
    },
    isSalariedEmpA: (state) => {
      state.IS_SALARIED_EMPLOYEE = false;
      state.ADDRESS_ENTERED = true;
    },
    addressEntA: (state) => {
      state.ADDRESS_ENTERED = false;
    },
  },
});

export const {} = urlFlagSlice.actions;

export default urlFlagSlice.reducer;
