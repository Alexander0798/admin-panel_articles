import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
interface Props {
    className?: string;
}

export const Sidebar: FC<Props> = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                size={ButtonSize.L}
                square={true}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={onToggle}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("Главная")}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("О сайте")}</span>
                </AppLink>
            </div>
            <div className={classNames(cls.switcher)}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
