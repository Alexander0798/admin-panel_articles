import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "../../../../entities/Currency";
import { Country } from "../../../../entities/Country";
import avatar from "shared/assets/test/avatar.jpg";
const meta = {
    title: "page/ProfilePage",
    component: ProfilePage,
    decorators: [
        StoreDecorator({
            profile: {
                form: {
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
        }),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
