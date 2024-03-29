import { configureStore } from "@reduxjs/toolkit";
import { ReducersMapObject } from "redux";
import { counterReducer } from "../../../../entities/Counter/model/slice/counterSlice";
import { StateSchema } from "./StateSchema";
import { userReducer } from "../../../../entities/User/index";
import { createReducerManager } from "./ReducerManager";
import { DeepPartial } from "app/types/types";

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<DeepPartial<StateSchema>>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	// @ts-expect-error vremenno
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
