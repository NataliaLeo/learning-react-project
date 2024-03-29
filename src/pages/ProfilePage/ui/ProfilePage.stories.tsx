import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta = {
	title: "pages/ProfilePage",
	component: ProfilePage,
	parameters: {},
	args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {},
};
Normal.decorators = [StoreDecorator({})];

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
