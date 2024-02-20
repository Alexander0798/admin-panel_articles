import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";
import { ArticleBlockType } from "../../model/types/article";

const meta = {
    title: "entities/ArticleTextBlockComponent",
    component: ArticleTextBlockComponent,
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        block: {
            id: "1",
            type: ArticleBlockType.TEXT,
            paragraphs: ["adfasd", "asdfasdf"],
            title: "dassa",
        },
    },
};
export const Dark: Story = {
    args: {
        block: {
            id: "1",
            type: ArticleBlockType.TEXT,
            paragraphs: ["adfasd", "asdfasdf"],
            title: "dassa",
        },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
