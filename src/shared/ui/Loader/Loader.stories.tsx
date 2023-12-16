import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Loader } from "./Loader";

const meta = {
	title: "shared/Loader",
	component: Loader,
	parameters: {
		// layout: "centered",
	},
	args: {
		// to: "/",
	},
	// tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		// children: "Text",
		// theme: AppLinkTheme.PRIMARY,
	},
};

export const Dark: Story = {
	args: {
		// children: "Text",
		// theme: AppLinkTheme.PRIMARY,
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
