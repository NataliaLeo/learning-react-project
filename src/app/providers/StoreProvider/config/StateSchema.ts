import {
	EnhancedStore,
	Reducer,
	ReducersMapObject,
	UnknownAction,
} from "@reduxjs/toolkit";
import { DeepPartial } from "app/types/types";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	//асинхронные редюсеры
	loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (
		state: StateSchema,
		action: UnknownAction
	) => DeepPartial<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}
