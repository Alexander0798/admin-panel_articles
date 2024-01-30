import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

const ThemeDecorator = (theme: Theme) => {
    const story = (Story: Story) => (
        <div className={`app ${theme}`} style={{ padding: "1rem" }}>
            <ThemeProvider initialTheme={theme}>
                <Story />
            </ThemeProvider>
        </div>
    );
    return story;
};
export default ThemeDecorator;
