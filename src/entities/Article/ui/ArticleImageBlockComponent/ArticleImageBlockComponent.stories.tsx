import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";
import { ArticleBlockType } from "../../model/types/article";
import Image from "shared/assets/test/avatar.jpg";
const meta = {
    title: "entities/ArticleImageBlockComponent",
    component: ArticleImageBlockComponent,
    args: {
        block: {
            id: "1",
            type: ArticleBlockType.IMAGE,
            src: Image,
            title: "test image",
        },
    },
    decorators: [StoreDecorator({})],
    tags: ["autodocs"],
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
