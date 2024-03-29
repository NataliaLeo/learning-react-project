// import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

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
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Light: Story = {
	args: {},
};
Light.decorators = [StoreDecorator({})];

export const AuthNavbar: Story = {
	args: {},
};
AuthNavbar.decorators = [
	StoreDecorator({ user: { authData: { id: "", username: "" } } }),
];
