import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,

    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem perspiciatis",
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
