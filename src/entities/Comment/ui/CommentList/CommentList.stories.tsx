import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentList } from "./CommentList";
import Avatar from "shared/assets/test/avatar.jpg";
const meta = {
    title: "entities/CommentList",
    component: CommentList,
    args: {
        comments: [
            { id: "1", text: "comment ", user: { id: "1", username: "admin", avatar: Avatar } },
            { id: "1", text: "comment ", user: { id: "1", username: "admin", avatar: Avatar } },
            { id: "1", text: "comment ", user: { id: "1", username: "admin", avatar: Avatar } },
        ],
    },
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Loading: Story = {
    args: { isLoading: true },
};
