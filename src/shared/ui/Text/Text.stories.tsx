import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "app/providers/ThemeProvider";
import { Align, Text, ThemeText } from "./Text";

const meta = {
    title: "shared/Text",
    component: Text,
    tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        title: "Lorem",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
    },
};
export const Dark: Story = {
    args: {
        title: "Lorem",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
    args: {
        title: "Lorem",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
        theme: ThemeText.ERROR,
    },
};
export const Right: Story = {
    args: {
        title: "Lorem",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
        align: Align.RIGHT,
    },
};
export const Center: Story = {
    args: {
        title: "Lorem",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
        align: Align.CENTER,
    },
};
export const OnlyTitle: Story = {
    args: {
        title: "Lorem",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
    },
};
