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
                light: "app light",
                dark: "app dark",
            },
            defaultTheme: "light",
            parentSelector: ".app",
        }),
        (Story) => (
            <BrowserRouter>
                <div className="app">
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
};

export default preview;
