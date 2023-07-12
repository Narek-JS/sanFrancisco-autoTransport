import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { initialValuesFromToForm, initialValuesUserInfoForm } from "@/model/form";

export const quoteFormSlice = createSlice({
    name: "quoteForm",
    initialState: {
        isOpenMobile: false,
        isOpenDesktop: false,
        values: {
            ...initialValuesFromToForm,
            vehicle: [ { year: '', make: '', model: '' } ],
            time: '',
            shippingMethod: '',
            isOperable: '',
            ...initialValuesUserInfoForm
        }
    },
    reducers: {
        closeQuoteFormMobile: (state) => {
            state.isOpenMobile = false;
        },
        openQuoteFormMobile: (state) => {
            state.isOpenMobile = true;
        },
        closeQuoteFormDesktop: (state) => {
            state.isOpenDesktop = false;
        },
        openQuoteFormDesktop: (state) => {
            state.isOpenDesktop = true;
        },
        updateQuoteFormValues: (state, action) => {
            state.values = action.payload;
        }
    }
});

export const { actions: {
    closeQuoteFormMobile,
    openQuoteFormMobile,
    closeQuoteFormDesktop,
    openQuoteFormDesktop,
    updateQuoteFormValues
} } = quoteFormSlice;

export const selectQuoteFormMobileStatus = (state: RootState) => state.quoteForm.isOpenMobile;
export const selectQuoteFormStatusDesktop = (state: RootState) => state.quoteForm.isOpenDesktop;
export const selectQuoteFormValues = (state: RootState) => state.quoteForm.values;