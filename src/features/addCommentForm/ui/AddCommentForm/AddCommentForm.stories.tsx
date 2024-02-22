import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AddCommentForm from "./AddCommentForm";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "features/AddCommentForm",
    component: AddCommentForm,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
