import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    "articlePage/fetchArticleList",
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const result = await extra.api.get<Article[]>("/articles", {
                params: { _expand: "user" },
            });
            if (!result.data) {
                throw new Error();
            }
            return result.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue("error");
        }
    }
);
