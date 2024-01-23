import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";

export const buildPlugins = (options: any): WebpackPluginInstance[] => {
    const {paths} = options
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        })
    ]
}