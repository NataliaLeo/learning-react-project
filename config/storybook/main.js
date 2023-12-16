// import type { StorybookConfig } from "@storybook/react-webpack5";

const config = {
	stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-styling-webpack",
	],
	framework: "@storybook/react-webpack5",
	docs: {
		autodocs: "tag",
	},
};
export default config;
