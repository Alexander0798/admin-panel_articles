import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addCommentForm } from "../types/addCommentForm";

const initialState: addCommentForm = {
    text: "",
};
export const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText: (state: addCommentForm, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
