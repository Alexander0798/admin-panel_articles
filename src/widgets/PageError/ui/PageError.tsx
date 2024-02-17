import cls from "./PageError.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { memo } from "react";

const reloadPage = () => {
    location.reload();
};
const PageErrorComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p className={classNames(cls.errorText)}>{t("Произошла непредвиденая ошибка")}</p>
            <Button theme={ThemeButton.CLEAR} className={classNames(cls.buttonReload)} onClick={reloadPage}>
                {t("Обновить страницу")}
            </Button>
        </div>
    );
};

export const PageError = memo(PageErrorComponent);
