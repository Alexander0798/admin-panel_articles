import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    decorators: [StoreDecorator({ loginForm: { username: "123", password: "1312312" } })],

    tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const WithError: Story = {
    args: {},
};
WithError.decorators = [StoreDecorator({ loginForm: { username: "123", password: "1312312", error: "error" } })];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
