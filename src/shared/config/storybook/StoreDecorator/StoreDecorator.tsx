import { ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { loginReducer } from "features/AuthByLogin/model/slice/loginSlice";

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};
const StoreDecorator = (state: Partial<StateSchema>, asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => {
    const story = (Story: Story) => (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <Story />
        </StoreProvider>
    );
    return story;
};
export default StoreDecorator;
