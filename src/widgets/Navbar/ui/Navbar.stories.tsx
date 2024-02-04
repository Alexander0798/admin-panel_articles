import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "widget/Navbar",
    decorators: [StoreDecorator({})],
    component: Navbar,
    tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lith: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Login: Story = {
    args: {},
};
Login.decorators = [StoreDecorator({ user: { authData: { id: "1", username: "fsdfsdf" } } })];
