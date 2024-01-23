import { Configuration } from 'webpack';
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";

export const buildWebpackConfig = (options: any): Configuration => {
    const { paths } = options
    return {
        mode: "development",
        entry: paths.entry,
        devtool: 'inline-source-map',
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
    }

};

