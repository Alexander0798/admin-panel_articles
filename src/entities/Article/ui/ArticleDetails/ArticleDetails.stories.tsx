import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleDetails } from "./ArticleDetails";
import { articleStorybook } from "shared/config/storybook/const/const";

const meta = {
    title: "entities/Article/ArticleDetails",
    component: ArticleDetails,
    args: {
        id: "1",
    },
    decorators: [StoreDecorator({ articleDetails: { data: articleStorybook, isLoading: false } })],
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetails>;

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
    args: {},
};
Loading.decorators = [StoreDecorator({ articleDetails: { isLoading: true } })];

export const LoadingDark: Story = {
    args: {},
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ articleDetails: { isLoading: true } })];
export const Error: Story = {
    args: {},
};
Error.decorators = [StoreDecorator({ articleDetails: { isLoading: false, error: "error" } })];
