import type { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CurrencySelect } from "./CurrencySelect";

const meta = {
    title: "entities/CurrencySelect",
    component: CurrencySelect,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
