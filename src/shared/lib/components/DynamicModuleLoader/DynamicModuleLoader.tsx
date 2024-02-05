import { FC, ReactNode, useEffect } from "react";
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};
type ReducersListEntry = [StateSchemaKey, Reducer];
interface Props {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<Props> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
