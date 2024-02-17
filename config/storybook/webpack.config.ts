import path from "path";
import { BuildPaths } from "../build/types/config";
import { Configuration, DefinePlugin, RuleSetRule } from "webpack";

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        output: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve!.modules!.push(paths.src);

    // @ts-ignore
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module!.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    });
    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(""),
            __PROJECT__: JSON.stringify("storybook"),
        })
    );
    return config;
};
