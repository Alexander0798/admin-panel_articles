import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { Login } from "../services/login/login";


const initialState: LoginSchema = {
    userName: "",
    password: "",
    isLoading: false,

};
export const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state) => {
                state.error = "";
                state.isLoading = true;
            })
            .addCase(Login.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(Login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
