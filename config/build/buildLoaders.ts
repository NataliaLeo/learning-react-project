import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
				plugins: [
					[
						"i18next-extract",
						{
							locales: ["ru", "en"],
							keyAsDefault: true,
						},
					],
				],
			},
		},
	};

	const cssLoader = buildCssLoader(isDev);
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|jpeg|gif|woff2|woff|jpg)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};
	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
