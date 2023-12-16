import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
	title: "widgets/Navbar",
	component: Navbar,
	parameters: {
		// layout: "centered",
	},
	// tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
	args: {},
};

export const Light: Story = {
	args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
