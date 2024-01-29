import type { Preview } from "@storybook/react";
import "../../src/app/styles/index.scss";
import { ThemeProvider } from "../../src/app/providers/ThemeProvider";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ReactRenderer } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeByClassName<ReactRenderer>({
            themes: {
                light: "app_light_theme",
                dark: "app_dark_theme",
            },
            defaultTheme: "light",
            parentSelector: "#appComponent",
        }),
        (Story) => (
            <BrowserRouter>
                <div id="appComponent">
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
};

export default preview;
