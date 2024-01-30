import { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import cls from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;
interface Props extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

const Input: FC<Props> = (props) => {
    const { className, value, onChange, type = "text", placeholder, autofocus, ...otherProps } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
        setCaretPosition(evt.target.value.length);
        console.log(caretPosition);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (evt: any) => {
        setCaretPosition(evt?.target?.selectionStart || 0);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                    className={cls.input}
                />
                {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
            </div>
        </div>
    );
};
export default memo(Input);
