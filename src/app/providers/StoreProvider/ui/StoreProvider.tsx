import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface Props {
    children: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider: FC<Props> = (props: Props) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState);
    return <Provider store={store}>{children}</Provider>;
};
