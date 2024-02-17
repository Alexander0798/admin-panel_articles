import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";

const meta = {
    title: "entities/ArticleImageBlockComponent",
    component: ArticleImageBlockComponent,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
