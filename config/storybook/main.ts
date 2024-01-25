import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        "@storybook/preset-scss",
        "@storybook/addon-themes",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                rules: [
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            "style-loader",
                            "css-loader",
                            {
                                loader: "sass-loader",
                                options: {
                                    implementation: require.resolve("sass"),
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
    docs: {
        autodocs: "tag",
    },
};
export default config;
