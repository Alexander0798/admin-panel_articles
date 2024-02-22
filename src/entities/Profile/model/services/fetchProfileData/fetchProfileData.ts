import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/Profile";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    "/profile/fetchProfileDate",
    async (profileId, thunkAPi) => {
        const { extra, rejectWithValue } = thunkAPi;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            return rejectWithValue("error");
        }
    }
);
