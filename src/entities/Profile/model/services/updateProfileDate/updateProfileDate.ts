import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/Profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "/profile/updateProfileDate",
    async (_, thunkAPi) => {
        const { extra, rejectWithValue, getState } = thunkAPi;
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<Profile>("/profile", formData);
            return response.data;
        } catch (err) {
            return rejectWithValue("error");
        }
    }
);
