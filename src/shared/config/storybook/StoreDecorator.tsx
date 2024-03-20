/* eslint-disable */
import { ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import React from "react"; //нужен

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
};

export const StoreDecorator =
	(
		state: Partial<StateSchema>,
		asyncReducers?: Partial<ReducersMapObject<StateSchema>>
	) =>
	// eslint-disable-next-line react/display-name
	(StoryComponent: StoryFn) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				{<StoryComponent />}
			</StoreProvider>
		);
