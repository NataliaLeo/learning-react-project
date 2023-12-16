import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

const meta = {
	title: "widgets/PageError",
	component: PageError,
	parameters: {
		// layout: "centered",
	},
	// tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
	args: {},
};

export const Light: Story = {
	args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
