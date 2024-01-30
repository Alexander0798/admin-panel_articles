import type { Meta, StoryObj } from "@storybook/react";
// import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "app/providers/ThemeProvider";
import Input from "./Input";

const meta = {
    title: "shared/Input",
    component: Input,

    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        placeholder: "Test Text",
        value: "txeT tseT",
    },
};
