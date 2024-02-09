import { FC, memo } from "react";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}
interface Props extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLinkComponent: FC<Props> = (props: Props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
export const AppLink = memo(AppLinkComponent);
