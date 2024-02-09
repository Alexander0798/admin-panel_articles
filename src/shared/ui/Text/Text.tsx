import { FC, memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeText {
    PRIMARY = "primary",
    ERROR = "error",
}
interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
}

const TextComponent: FC<Props> = (props: Props) => {
    const { className, title, text, theme = ThemeText.PRIMARY } = props;
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
export const Text = memo(TextComponent);
