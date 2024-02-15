import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/ThemeProvider";
import { Select } from "./Select";

const meta = {
    title: "shared/Select",
    component: Select,

    tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый пункт" },
            { value: "1234", content: "Второй пункт" },
            { value: "12345", content: "Третий пункт" },
        ],
    },
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
