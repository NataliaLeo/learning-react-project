import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react"; //нужен

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
	<div className={`app ${theme}`}>{<StoryComponent />}</div>;
