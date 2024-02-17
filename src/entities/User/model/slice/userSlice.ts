import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localsorage";

const initialState: UserSchema = {
    _mounted: false,
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthDate: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._mounted = true;
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
