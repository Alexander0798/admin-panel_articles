import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentCard } from "./CommentCard";
import Avatar from "shared/assets/test/avatar.jpg";
const meta = {
    title: "entities/CommentCard",
    component: CommentCard,
    args: {
        comment: { id: "1", text: "comment ", user: { id: "1", username: "admin", avatar: Avatar } },
    },
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Loading: Story = {
    args: { isLoading: true },
};
