import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
	title: "shared/Select",
	component: Select,
	parameters: {
		// layout: "centered",
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Укажите значение",
		options: [
			{ value: "1", content: "Первый" },
			{ value: "2", content: "Второй" },
			{ value: "3", content: "Третий" },
		],
	},
};
