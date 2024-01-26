import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "background_inverted",
}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: string;
}

export const Button: FC<Props> = (props) => {
    const { className, theme, children, square, size = ButtonSize.M, ...otherProps } = props;
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };
    return (
        <button type="button" className={classNames(cls.Button, mods, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
