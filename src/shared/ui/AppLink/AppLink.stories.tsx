import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    args: {
        to: "/",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};
export const Secondary: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.SECONDARY,
    },
};
export const PrimaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SecondaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.SECONDARY,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
