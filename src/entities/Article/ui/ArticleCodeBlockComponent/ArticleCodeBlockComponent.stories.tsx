import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
import { ArticleBlockType } from "../../model/types/article";

const meta = {
    title: "entities/Article/ArticleCodeBlockComponent",
    component: ArticleCodeBlockComponent,
    args: {
        block: {
            id: "1",
            type: ArticleBlockType.CODE,
            code: `const meta = {
                title: "entities/ArticleCodeBlockComponent",
                component: ArticleCodeBlockComponent,
                args: {
                    block: {
                        id: "1",
                        type: ArticleBlockType.CODE,
                        code: "var i = 0"
                    },
                },
                decorators: [StoreDecorator({})],
                tags: ["autodocs"],
            } satisfies Meta<typeof ArticleCodeBlockComponent>;
            `,
        },
    },
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
