import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

const ThemeDecorator = (theme: Theme) => {
    const story = (Story: Story) => (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
    return story;
};
export default ThemeDecorator;
