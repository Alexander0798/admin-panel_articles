import path from "path"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"

export default (env: any) => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html")
  }

  const config = buildWebpackConfig(
    paths
  )
}