import { Story } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

// @ts-ignore
const StoreDecorator = (state: Partial<StateSchema>) => {
    const story = (Story: Story) => (
        // @ts-ignore
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>
    );
    return story;
};
export default StoreDecorator;
