import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByLogin";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    // Async reducers
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof Partial<StateSchema>;

export interface ReducerManager {
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    getReducerMap: () => ReducersMapObject<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
