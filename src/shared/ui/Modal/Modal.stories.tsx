import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
	title: "shared/Modal",
	component: Modal,
	parameters: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		isOpen: true,
		children: "Text Text Text Text Text Text Text",
	},
};

export const Dark: Story = {
	args: {
		isOpen: true,
		children: "Text Text Text Text Text Text Text",
	},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
