import { StoryFn } from "@storybook/react";
import React from "react"; //нужен
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (StoryComponent: StoryFn) => {
	return <BrowserRouter>{<StoryComponent />}</BrowserRouter>;
};
