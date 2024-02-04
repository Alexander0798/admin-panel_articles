import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "../../../../../entities/User";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localsorage";

interface LoginProps {
    userName: string;
    password: string;
}
export const Login = createAsyncThunk<User, LoginProps, { rejectValue: string }>("login", async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>("http://localhost:8800/login", authData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthDate(response.data));

        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});
