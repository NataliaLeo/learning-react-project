import { configureStore } from "@reduxjs/toolkit";
import { ReducersMapObject } from "redux";
import { counterReducer } from "../../../../entities/Counter/model/slice/counterSlice";
import { StateSchema } from "./StateSchema";
import { userReducer } from "../../../../entities/User/index";
import { createReducerManager } from "./ReducerManager";
import { $api } from "shared/api/api";
import { To } from "react-router-dom";
import { NavigateOptions } from "react-router-dom";

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
						navigate,
					},
				},
			}),
	});

	// @ts-expect-error vremenno
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
