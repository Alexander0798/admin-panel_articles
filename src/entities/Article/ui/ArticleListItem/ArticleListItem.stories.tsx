import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleListItem } from "./ArticleListItem";
import { ArticleView } from "entities/Article/model/types/article";
import { articleStorybook } from "shared/config/storybook/const/const";

const meta = {
    title: "entities/Article/ArticleListItem",
    component: ArticleListItem,
    args: { article: articleStorybook },
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightList: Story = {
    args: { view: ArticleView.LIST },
};
export const DarkList: Story = {
    args: { view: ArticleView.LIST },
};
export const LightPlate: Story = {
    args: { view: ArticleView.PLATE },
};
export const DarkPlate: Story = {
    args: { view: ArticleView.PLATE },
};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];
