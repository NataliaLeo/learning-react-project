import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImg from "./avatar-storybook.jpg";

const meta = {
	title: "shared/Avatar",
	component: Avatar,
	parameters: {
		// layout: "centered",
	},
	// tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		src: AvatarImg,
		size: 200,
	},
};

export const Small: Story = {
	args: {
		src: AvatarImg,
		size: 50,
	},
};

// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
