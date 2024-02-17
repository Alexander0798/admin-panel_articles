import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localsorage";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById";
import { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
};
export const articleDetails = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const { actions: articleDetailsActions } = articleDetails;
export const { reducer: articleDetailsReducer } = articleDetails;
