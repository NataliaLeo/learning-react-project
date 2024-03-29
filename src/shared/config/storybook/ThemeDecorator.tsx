import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import React from "react"; //нужен

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
	(
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>{<StoryComponent />}</div>
		</ThemeProvider>
	);
