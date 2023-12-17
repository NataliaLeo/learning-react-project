import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";
import React from "react";

const meta = {
	title: "widgets/Sidebar",
	component: Sidebar,
	parameters: {
		// layout: "centered",
	},
	// tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];