import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "./PageLoader";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widget/PageLoader",
    component: PageLoader,
    tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lith: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
