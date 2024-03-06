import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
	title: "shared/Text",
	component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
	args: {
		title: "Title",
		text: "Text Text Text Text Text Text Text Text",
	},
};

export const AllError: Story = {
	args: {
		title: "Title",
		text: "Text Text Text Text Text Text Text Text",
		theme: TextTheme.ERROR,
	},
};

export const OnlyTitle: Story = {
	args: {
		title: "Title",
	},
};

export const OnlyText: Story = {
	args: {
		text: "Text Text Text Text Text Text Text Text",
	},
};

export const AllDark: Story = {
	args: {
		title: "Title",
		text: "Text Text Text Text Text Text Text Text",
	},
};

AllDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
	args: {
		title: "Title",
	},
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
	args: {
		text: "Text Text Text Text Text Text Text Text",
	},
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
