import type { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Code } from "./Code";

const meta = {
    title: "shared/Code",
    component: Code,
    args: {
        text: `const meta = {
    title: "shared/Code",
    component: Code,
    args: {
                children: "const meta = {}"
    },
            tags: ["autodocs"],
} satisfies Meta<typeof Code>;
        
export default meta;
type Story = StoryObj<typeof meta>;
`,
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
