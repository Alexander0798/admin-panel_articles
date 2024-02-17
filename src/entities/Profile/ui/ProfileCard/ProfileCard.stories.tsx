import type { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ProfileCard } from "./ProfileCard";
import { Currency } from "../../../Currency";
import { Country } from "../../../Country";
import avatar from "shared/assets/test/avatar.jpg";
const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    decorators: [StoreDecorator({})],
    args: {
        data: {
            firstName: "Alex",
            lastName: "Profi",
            age: 29,
            currency: Currency.RUB,
            country: Country.Armenia,
            city: "Taganrog",
            username: "admin",
            avatar,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
    args: {
        error: "ERROR",
    },
};
export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
