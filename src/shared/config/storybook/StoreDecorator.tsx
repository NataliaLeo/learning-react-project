import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "entities/Counter/model/types/counterSchema";
import React from "react"; //нужен

export const StoreDecorator =
	// eslint-disable-next-line react/display-name
	(state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) =>
		<StoreProvider initialState={state}>{<StoryComponent />}</StoreProvider>;
