import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

const ThemeDecorator = (theme: Theme) => {
    const story = (Story: Story) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
    return story;
};
export default ThemeDecorator;
