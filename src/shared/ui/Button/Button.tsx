import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    theme?: ThemeButton;
    square?: boolean;
    size?: string;
}

export const Button: FC<Props> = (props) => {
    const { className, theme, children, square, disabled, size = ButtonSize.M, ...otherProps } = props;
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    };
    return (
        <button type="button" className={classNames(cls.Button, mods, [className, cls[theme]])} disabled={disabled} {...otherProps}>
            {children}
        </button>
    );
};
