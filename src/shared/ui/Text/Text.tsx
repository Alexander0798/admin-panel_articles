import { FC, memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeText {
    PRIMARY = "primary",
    ERROR = "error",
}
export enum Align {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}
interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
    align?: Align
}

const TextComponent: FC<Props> = (props: Props) => {
    const { className, title, text, theme = ThemeText.PRIMARY, align = Align.LEFT } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
export const Text = memo(TextComponent);
