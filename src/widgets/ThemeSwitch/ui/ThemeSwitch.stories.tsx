import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitch } from "./ThemeSwitch";

const meta = {
	title: "widgets/ThemeSwitch",
	component: ThemeSwitch,
	parameters: {},
	args: {},
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
