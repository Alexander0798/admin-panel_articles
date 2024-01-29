/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-no-undef */
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter.value);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>
                increment
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
