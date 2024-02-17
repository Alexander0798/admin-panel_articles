import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";

const meta = {
    title: "entities/ArticleTextBlockComponent",
    component: ArticleTextBlockComponent,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
