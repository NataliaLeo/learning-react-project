import { configureStore } from "@reduxjs/toolkit";
import { ReducersMapObject } from "redux";
import { counterReducer } from "../../../../entities/Counter/model/slice/counterSlice";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
