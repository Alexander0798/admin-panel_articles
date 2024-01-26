import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface Props {
    className?: string;
}

export const Sidebar: FC<Props> = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid="sidebar-toggle" className={cls.collapseBtn} theme={ThemeButton.CLEAR} onClick={onToggle}>
                {collapsed ? ">>" : "<<"}
            </Button>
            <div className={classNames(cls.switcher, { [cls.column]: collapsed }, [])}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
