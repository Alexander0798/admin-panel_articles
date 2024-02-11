import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/Profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "/profile/fetchProfileDate",
    async (_, thunkAPi) => {
        const { extra, rejectWithValue } = thunkAPi;
        try {
            const response = await extra.api.get<Profile>("/profile");
            return response.data;
        } catch (err) {
            return rejectWithValue("error");
        }
    }
);
