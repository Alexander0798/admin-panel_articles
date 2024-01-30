import type { Preview } from "@storybook/react";
import "../../src/app/styles/index.scss";
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
        (Story) => (
            <BrowserRouter>
                <div id="app">
                    <Story />
                </div>
            </BrowserRouter>
        ),
        withThemeByClassName<ReactRenderer>({
            themes: {
                light: "app app_light_theme",
                dark: "app app_dark_theme",
            },
            defaultTheme: "light",
            parentSelector: "body",
        }),
    ],
};

export default preview;
