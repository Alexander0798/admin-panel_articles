import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleList } from "./ArticleList";
import { ArticleView } from "entities/Article/model/types/article";
import { articleStorybook } from "shared/config/storybook/const/const";

const meta = {
    title: "entities/Article/ArticleList",
    component: ArticleList,
    args: {
        articles: new Array(3).fill(0).map((_, index) => ({
            ...articleStorybook,
            id: String(index),
        })),
    },

    tags: ["autodocs"],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightList: Story = {
    args: { view: ArticleView.LIST },
};
export const DarkList: Story = {
    args: { view: ArticleView.LIST },
};
export const LoadingList: Story = {
    args: { view: ArticleView.LIST, isLoading: true },
};
export const LightPlate: Story = {
    args: { view: ArticleView.PLATE },
};
export const DarkPlate: Story = {
    args: { view: ArticleView.PLATE },
};
export const LoadingPlate: Story = {
    args: { view: ArticleView.PLATE, isLoading: true },
};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];
