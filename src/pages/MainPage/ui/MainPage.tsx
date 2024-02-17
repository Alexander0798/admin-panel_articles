import { useTranslation } from "react-i18next";
import { FC, memo } from "react";

const MainPage: FC = () => {
    const { t } = useTranslation("main");
    return <div>{t("Главная страница")}</div>;
};

export default memo(MainPage);
