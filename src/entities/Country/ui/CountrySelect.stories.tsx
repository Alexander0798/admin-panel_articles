import type { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CountrySelect } from "./CountrySelect";

const meta = {
    title: "entities/CountrySelect",
    component: CountrySelect,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
