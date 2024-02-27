import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "../../../../../entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localsorage";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    "login/loginByUsername",
    async (authData, thunkAPi) => {
        const { dispatch, extra, rejectWithValue } = thunkAPi;
        try {
            const response = await extra.api.post<User>("/login", authData);

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthDate(response.data));

            return response.data;
        } catch (err) {
            return rejectWithValue("error");
        }
    }
);
