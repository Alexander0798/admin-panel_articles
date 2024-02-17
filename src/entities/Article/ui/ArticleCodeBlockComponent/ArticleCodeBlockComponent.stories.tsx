import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";

const meta = {
    title: "entities/ArticleCodeBlockComponent",
    component: ArticleCodeBlockComponent,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
