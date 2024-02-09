import type { Meta, StoryObj } from "@storybook/react";
import LangSwitcher  from "./LangSwitcher";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widget/LangSwitcher",
    component: LangSwitcher,

    tags: ["autodocs"],
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lith: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
