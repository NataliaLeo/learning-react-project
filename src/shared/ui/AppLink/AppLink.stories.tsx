import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
	title: "shared/AppLink",
	component: AppLink,
	parameters: {
		// layout: "centered",
	},
	args: {
		to: "/",
	},
	// tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Text",
		theme: AppLinkTheme.PRIMARY,
	},
};

export const PrimaryDark: Story = {
	args: {
		children: "Text",
		theme: AppLinkTheme.PRIMARY,
	},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
	args: {
		children: "Text",
		theme: AppLinkTheme.SECONDARY,
	},
};

export const SecondaryDark: Story = {
	args: {
		children: "Text",
		theme: AppLinkTheme.SECONDARY,
	},
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
