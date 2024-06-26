// import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
	title: "shared/Button",
	component: Button,
	parameters: {
		// layout: "centered",
	},
	// tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Text",
	},
};

export const Clear: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR,
	},
};

export const ClearInverted: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR_INVERTED,
	},
};

export const Outline: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineInverted: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE_INVERTED,
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
};

export const OutlineSizeXL: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.XL,
	},
};

export const OutlineD: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
	},
};
OutlineD.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundInvertedTheme: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Square: Story = {
	args: {
		children: "T",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
};

export const SquareSizeL: Story = {
	args: {
		children: "T",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};

export const SquareSizeXL: Story = {
	args: {
		children: "T",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};

export const Disabled: Story = {
	args: {
		children: "T",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		disabled: true,
	},
};
