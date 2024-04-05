/* eslint-disable */
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "../../../entities/Profile"; //???
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import React from "react"; //нужен
import { ReducersList } from "shared/lib/components/DynamicModuleLoader";
import { DeepPartial } from "app/types/types";

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
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
